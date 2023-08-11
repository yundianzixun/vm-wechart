//获取应用实例
const config = require('../../../config.js');
var detailServices = require('../../../services/goods/detail.js');
var Request = require('../../../services/request.js');
const sa = require('../../../utils/sensorsdata.min.js');
var app = getApp();

Page({
    data: {
        autoplay: true,
        interval: 5000,
        duration: 500,
        goodsDetail: {},
        swiperCurrent: 0,
        hasMoreSelect: true,
        selectSize: "选择规格：",
        selectSizePrice: 0,
        shopNum: 0,
        hideShopPopup: true,
        buyNumber: 0,
        buyNumMin: 1,
        buyNumMax: 0,
        favicon: 0,
        selectptPrice: 0,
        propertyChildIds: "",
        propertyChildNames: "",
        canSubmit: false, //  选中规格尺寸时候是否允许加入购物车
        shopCarInfo: {},
        shopType: "addShopCar", //购物类型，加入购物车或立即购买，默认为加入购物车
        tabArr: {
            curHdIndex: 0,
            curBdIndex: 0
        },
        wxlogin: true,
        sharecode: true,
        sharebox: true,
        title: "商品详情",
        barBg: 'red',
        color: '#ffffff'
    },
    onLoad: function (options) {
        sa.track('$AppViewScreen', {
            $authKey: config.authKey,
            $event_name: '进入商品详情',
        });
        // 加载商品详情
        this.goodDetailShow(1);
        // 加载商品评价
        this.goodReviewShow(1);
        // 加载SKU
        this.goodSkuShow(1);
        this.setData({
            bottomHeight: app.globalData.bottomHeight
        })
    },
    goodDetailShow(goodId) {
        var that = this;
        var goodDetail = detailServices.goodDetail;
        var introduceList = goodDetail.introduce.split(';');
        console.log("商品详情介绍=" + JSON.stringify(introduceList))
        that.setData({
            goodDetail: goodDetail,
            introduceList: introduceList
        })
    },
    goodReviewShow(goodId) {
        var that = this;
        var reviewList = detailServices.reviewList;
        console.log("商品评价=" + JSON.stringify(reviewList))
        that.setData({
            reviewList: reviewList,
            reviewNum: reviewList.length
        })
    },
    goodSkuShow(goodId) {
        var that = this;
        var goodSku = detailServices.goodSku;
        var goodDetail = detailServices.goodDetail;
        var selectSizeTemp = "";
        if (goodSku.properties) {
            for (var i = 0; i < goodSku.properties.length; i++) {
                selectSizeTemp = selectSizeTemp + " " + goodSku.properties[i].name;
            }
            that.setData({
                goodSku: goodSku,
                hasMoreSelect: true,
                selectSize: goodDetail.originalPrice + selectSizeTemp,
                selectSizePrice: goodDetail.originalPrice,
                buyNumMax: goodDetail.stores,
                buyNumber: (goodDetail.stores > 0) ? 1 : 0,
            });
        }
    },
    //自定义轮播事件
    swiperchange: function (e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    // 商品详情和商品评价Tab切换事件
    tabFun: function (e) {
        var _datasetId = e.target.dataset.id;
        var _obj = {};
        _obj.curHdIndex = _datasetId;
        _obj.curBdIndex = _datasetId;
        this.setData({
            tabArr: _obj
        });
    },
    // 跳转购物车
    goCart: function () {
        wx.reLaunch({
            url: "/pages/cart/index"
        });
    },

    // 收藏
    collect: function () {
        var that = this;
        wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 1000
        })
        that.setData({
            favicon: 1
        });
    },
    // 取消收藏
    cancel: function () {
        var that = this;
        wx.showToast({
            title: '取消收藏',
            icon: 'success',
            duration: 1000
        })
        that.setData({
            favicon: 0
        });
    },
    // 加入购物车
    toAddCart: function () {
        this.setData({
            shopType: "toAddCart"
        })
        this.bindGuiGeTap();
    },
    // 立即购买
    tobuy: function () {
        this.setData({
          shopType: "tobuy"
        });
        this.bindGuiGeTap();
      },
    /**
     * 规格选择弹出框
     */
    bindGuiGeTap: function () {
        this.setData({
            hideShopPopup: false
        })
    },
    /**
     * 规格选择弹出框隐藏
     */
    closePopupTap: function () {
        this.setData({
            hideShopPopup: true
        })
    },
    /**
     * 购买数量-减
     */
    numJianTap: function () {
        if (this.data.buyNumber > this.data.buyNumMin) {
            var currentNum = this.data.buyNumber;
            currentNum--;
            this.setData({
                buyNumber: currentNum
            })
        }
    },
    /**
     * 购买数量-加
     */
    numJiaTap: function () {
        if (this.data.buyNumber < this.data.buyNumMax) {
            var currentNum = this.data.buyNumber;
            currentNum++;
            this.setData({
                buyNumber: currentNum
            })
        }
    },
})