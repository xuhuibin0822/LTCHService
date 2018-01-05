// pages/login/login.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: ''
  },
  login: function() {
    console.log(this.data.account);
    wx.navigateBack();
  }
})