const app = getApp()
 
Page({
  data: {
    isIphoneX:false,
  },
  onLoad: function () {
    console.log("默认高度"+app.globalData.bottomHeight);
    this.setData({
        bottomHeight : app.globalData.bottomHeight
    })
    // this.setData({
    //   "isIphoneX": this.isIphoneX()
    // })
  },
  isIphoneX() {
    let info = wx.getSystemInfoSync();
    console.log("XXXX"+info.model+","+JSON.stringify(info));
    if (/iPhone X/i.test(info.model)) {
      return true;
    } else {
      return false;
    }
  }
})

