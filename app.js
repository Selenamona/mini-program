//app.js
const WXBizDataCrypt = require('./utils/WXBizDataCrypt')
App({
  onLaunch: function (res) {
    console.log('测试 app onload', res)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url:
            'https://api.weixin.qq.com/sns/jscode2session?appid=wx2435a1d3c70aaddc&secret=1e87087b3a6e998b46f5c82fb7bcb03f&js_code=' +
            res.code +
            '&grant_type=authorization_code',
          success: (e) => {
            // console.log(e,55)
            this.openId = e.openid
            this.sessionKey = e.session_key
            // this.unionId = e.unionId;
          },
        })
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res) => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
          })
        }
      },
    })
  },
  onShow(res) {
    console.log('测试 app onShow', res)
    if (res.path === 'pages/longPressRecord/index') {
      wx.reLaunch({ url: '/pages/index/index' })
    }
    // 获取转发信息
    // console.log(res,'打开小程序');
    this.globalData.query = res.query
    // console.log(res.query,'分享传参')
    // wx.getShareInfo({
    //   shareTicket: res.shareTicket,
    //   success:(e)=>{
    //     console.log(e,"getShareInfo");
    //     var appId = 'wx2435a1d3c70aaddc';
    //     var sessionKey = "tPkU4KvH72PR6JyEEmyUMw==";
    //     var encryptedData =e.encryptedData;
    //     var iv = e.iv;
    //     var pc = new WXBizDataCrypt(appId, sessionKey)
    //     var data = pc.decryptData(encryptedData , iv)
    //     console.log('解密后 data: ', data)
    //   }
    // })
    // // 获取设备信息
    // wx.getSystemInfo({
    //   success:(res)=>{
    //     console.log(res,'获取系统信息')
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    openId: '',
    sessionKey: '',
    unionId: '',
    query: '',
  },
})
