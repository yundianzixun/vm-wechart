const config = require('../../../config.js');
var categoryServices = require('../../../services/goods/category.js');
var Request = require('../../../services/request.js');
const sa = require('../../../utils/sensorsdata.min.js');
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 8000,
        duration: 800,
        swiperCurrent: 0,
        selectCurrent: 0,
        categoryId: 0,
        loadingMoreHidden: true,
        search: true,
        nonehidden: true,
        searchidden: true,
        isBannerShow: false,
    },
    onLoad: function (options) {
        // 加载商品分类
        this.categoryShow();
        sa.track('$AppViewScreen', {
            $authKey: config.authKey,
            $event_name: '进入商品分类',
        });
    },
    categoryShow: function (e) {
        var that = this;
        var categoryList = categoryServices.categoryList;
        var categoryId = categoryList[0].id;
        that.setData({
            categoryList: categoryList,
            categoryId: categoryId
        })
        that.categoryChildShow(categoryId);
    },
    tabClick: function (e) {
        var that = this;
        that.categoryChildShow(e.currentTarget.id);
        // 埋点示例：按钮点击
        sa.track('ButtonClicked', {
            $event_name: '商品分类',
        });
    },
    categoryChildShow(categoryId) {
        var that = this;
        var categoryChildList = categoryServices.categoryChildList;
        var categoryChildListNew = [];
        for (var i in categoryChildList) {
            if (categoryChildList[i].pid == categoryId) {
                categoryChildListNew.push(categoryChildList[i]);
            }
        }
        that.setData({
            categoryId: categoryId,
            categoryChildList: categoryChildListNew
        })
        that.bannerShow(categoryId);
    },
    bannerShow (categoryId) {
        var that = this;
        that.setData({
            isBannerShow: false
        })
        Request.GET('/api/shop/banner/list', {
                shopId: 1
            })
            .then(function (data) {
                console.log('/api/shop/banner/list请求成功', data);
                for (var i in data) {
                    if (data[i].id == categoryId) {
                        that.setData({
                            categoryImgUrl: data[i].imgUrl,
                            isBannerShow: true
                        })
                    }
                }
                
            })
            .catch(function (error) {
                console.log('/api/shop/banner/list请求失败', error);
            });
    },
    levelClick: function (e) {
        wx.showToast({
            icon: 'none',
            title: '敬请期待',
            duration: 500
        });
        // 埋点示例：按钮点击
        sa.track('ButtonClicked', {
            $event_name: '详情',
        });
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
})