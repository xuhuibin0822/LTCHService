// pages/login/login.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: wx.getStorageSync('account') || '',
    password: wx.getStorageSync('password') || ''
  },
  inputAccount: function (e) {
    this.setData({ account: e.detail.value });
  },
  inputPassword: function (e) {
    this.setData({ password: e.detail.value });
  },
  login: function () {
    if (this.data.account && this.data.password) {
      wx.setStorageSync('account', this.data.account);
      wx.setStorageSync('password', this.data.password);
      wx.navigateBack();
    } else {
      wx.showToast({
        title: '请输入手机号和密码',
      });
    }
  }
})