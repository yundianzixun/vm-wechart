// app.js
var config = require('./config.js');
import sa from './utils/sensorsdata.min.js';
App({
    onLaunch() {
        // 神策数据埋点
        sa.init({
            server_url: config.subDomain+"/api/logs/sensors/up",
            heatmap: {
              clickmap: 'default',
              scroll_notice_map: 'default',
            },
            name: '动力商城小程序',
            web_url: config.subDomain,
            show_log: true,
          });
      // 展示本地存储能力
      wx.getSystemInfo({
        success: res => {
          let Height = res.windowHeight;
          this.globalData.Height = Height;
          this.globalData.bottomHeight = res.screenHeight - res.safeArea.bottom;
        },
        fail(err){
            console.log(err);
        }
      })
  
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
      
  
      // 自定义头部
      let menuButtonObject = wx.getMenuButtonBoundingClientRect();
      wx.getSystemInfo({
        success: res => {
          //导航高度
          let statusBarHeight = res.statusBarHeight,
            navTop = menuButtonObject.top,
            navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject.width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
            navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
          this.globalData.navHeight = navHeight; //导航栏总体高度
          this.globalData.navTop = navTop; //胶囊距离顶部距离
          console.log("状态栏高度="+statusBarHeight);
          console.log("导航高度="+menuButtonObject.height);
          console.log("胶囊距离顶部距离="+navTop);
          this.globalData.navObj = menuButtonObject.height; //胶囊高度
          this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
          this.globalData.windowHeight = res.windowHeight;
          this.globalData.windowWidth = res.windowWidth;
          console.log(navHeight,navTop,menuButtonObject.height,navObjWid)
        },
        fail(err) {
          console.log(err);
        }
      })
    },
    globalData: {
      userInfo: null,
      bottomHeight: 0
    }
  })