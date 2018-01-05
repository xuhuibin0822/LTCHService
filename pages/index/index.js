//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onShow: function () {
    if (!wx.getStorageSync('userId')) {
      return wx.navigateTo({
        url: '../login/login',
      })
    }
  }
})
