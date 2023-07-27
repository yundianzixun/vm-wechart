const config = require('../../config.js');
var homeServices = require('../../services/home/home.js');
var Request = require('../../services/request.js');
const sa = require('../../utils/sensorsdata.min.js');

const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navHeight: app.globalData.navHeight, //导航栏高度
        navTop: app.globalData.navTop, //导航栏距顶部距离
        navObj: app.globalData.navObj, //胶囊的高度
        navObjWid: app.globalData.navObjWid, //胶囊宽度+距右距离
        maillTitle: homeServices.maillTitle, // 商城Title
        bannerList: [], // Banner集合
        indicatorDots: true, //Banner 是否显示面板指示点
        carouselMarginTop: 0, //marginTop初始高度
        goodsList: [], // 商品列表数据
        page: 1, // 当前页数
        pageSize: 10, // 每页加载的商品数量
        total: 50, // 总商品数量，这里模拟50条数据
        isLoading: false, // 是否正在加载数据
        hasMore: true, // 是否还有更多数据
    },
    onLoad: function (options) {
        var maillTitle = this.data.maillTitle;
        this.setData({
            store_name: maillTitle.name,
            store_name_sub: maillTitle.nameSub
        })
        // 加载banner轮播
        this.bannerShow();
        // 适配轮播图外间距
        this.adaptCarouselMarginTop();
        // 加载商品分类
        this.categorieShow();
        // 加载平台资讯
        this.noticeShow();
        // 加载新品特卖
        this.specialList();
        //加载商品动态
        this.dynamicShow();
        //加载商品列表
        this.loadGoodsList();
        // 埋点示例：页面浏览
        sa.track('$AppViewScreen', {
            $authKey: config.authKey,
            $event_name: '进入首页',
        });
    },
    bannerShow: function (success) {
        var that = this;
        Request.GET('/api/shop/banner/list', {
                shopId: 1
            })
            .then(function (data) {
                console.log('/api/shop/banner/list请求成功', data);
                that.setData({
                    bannerList: data
                })
            })
            .catch(function (error) {
                console.log('/api/shop/banner/list请求失败', error);
            });
    },
    dynamicShow: function (success) {
        var that = this;
        Request.GET('/api/shop/dynamic/list', {
                shopId: 1
            })
            .then(function (data) {
                console.log('/api/shop/dynamic/list请求成功', data);
                that.setData({
                    dynamicList: data,
                    show_buy_dynamic: '1'
                })
            })
            .catch(function (error) {
                console.log('/api/shop/dynamic/list请求失败', error);
            });
    },
    categorieShow: function (success) {
        var categorieList = homeServices.categorieList;
        this.setData({
            categorieList: categorieList
        })
    },
    // 适配轮播图外间距
    adaptCarouselMarginTop() {
        let systemInfo = wx.getSystemInfoSync(),
            pxToRpxScale = 750 / systemInfo.windowWidth, // px转换到rpx的比例
            ktxStatusHeight = systemInfo.statusBarHeight * pxToRpxScale, // 状态栏高度
            navigationHeight = 44 * pxToRpxScale; // 导航高度，44是大概估值
        this.setData({
            carouselMarginTop: navigationHeight + ktxStatusHeight + 100 // 10是一个预估值，可根据呈现效果修改
        });
    },
    noticeShow: function () {
        var noticeList = homeServices.noticeList;
        this.setData({
            noticeList: noticeList
        })
    },
    specialList: function () {
        var specialList = homeServices.specialList;
        this.setData({
            specialList: specialList
        })
    },

    // 加载商品列表数据
    // 加载商品列表数据
    loadGoodsList: function () {
        console.log("加载更多....", this.data.isLoading, this.data.hasMore)
        if (this.data.isLoading || !this.data.hasMore) {
            return;
        }

        this.setData({
            isLoading: true,
            // loading: true
        });

        // 模拟异步请求数据
        setTimeout(() => {
            const {
                page,
                pageSize,
                total
            } = this.data;
            const start = (page - 1) * pageSize;
            const end = Math.min(start + pageSize, total);

            const newGoodsList = [];
            for (let i = start; i < end; i++) {
                newGoodsList.push({
                    id: i + 1,
                    name: `商品${i + 1}`,
                    imgUrl: `https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png?imageMogr2/thumbnail/320x320/quality/70/strip/format/webp`,
                    originalPrice: `52.22`,
                    discount: `1.7`,
                    currentPrice: `68`,
                    brandLogo: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png?imageMogr2/thumbnail/320x320/quality/70/strip/format/webp',
                    bardName: '耐克',
                });
            }

            this.setData({
                goodsList: this.data.goodsList.concat(newGoodsList),
                page: page + 1,
                isLoading: false,
                hasMore: end < total,
            });
        }, 500);
    },

    // 下拉刷新
    onPullDownRefresh: function () {
        console.log("下拉刷新...")
        this.setData({
            goodsList: [],
            page: 1,
            hasMore: true,
        });
        this.loadGoodsList();
        wx.stopPullDownRefresh();
        // 埋点示例：按钮点击
        sa.track('ButtonClicked', {
            $event_name: '下拉刷新',
        });
    },

    // 上拉加载更多
    onReachBottom: function () {
        this.loadGoodsList();
    },


    // onReachBottom: function () {

    // },
    /**
     * 生命周期函数--监听页面隐藏
     */
    // onHide() {
    //     console.log("onHide......");
    // },

    /**
     * 生命周期函数--监听页面卸载
     */
    // onUnload() {
    //     console.log("onUnload......");
    // },
    goSearch() {
        // 埋点示例：按钮点击
        sa.track('ButtonClicked', {
            $event_name: '搜索框',
        });
        wx.navigateTo({ url: '../home/history/index' })
    },
    tapBanner() {
        wx.showToast({
            icon: 'none',
            title: '点击了Banner',
            duration: 500
        });
        // 埋点示例：按钮点击
        sa.track('ButtonClicked', {
            $event_name: 'Banner',
        });
    },
});