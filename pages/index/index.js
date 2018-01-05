//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lists: [{ name: '装修服务', date: '2018-01-05' }, { name: '装修服务', date: '2018-01-04' }]
  },
  onShow: function () {
    if (!wx.getStorageSync('account')) {
      return wx.navigateTo({
        url: '../login/login',
      })
    }
  }
})
