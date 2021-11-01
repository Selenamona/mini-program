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
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx2435a1d3c70aaddc&secret=1e87087b3a6e998b46f5c82fb7bcb03f&js_code=' +
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
  /**
   * 创建一个 WebSocket 连接
   */
  async connect() {
    // 判断小程序版本
    let baseUrl = 'wss://abc.com/aa/websocket/'
    const env = wx.getAccountInfoSync().miniProgram.envVersion
    if (env === 'develop' || env === 'trial') {
      baseUrl = 'wss://abc.com/aa/websocket/'
    }
    this.socket = await wx.connectSocket({
      url: baseUrl + this.globalData.traceId,
      header: { 'content-type': 'application/json' },
    })
    this.socket.onOpen((event) => {
      console.log('监听 websocket 连接成功', event)
      log.add(['websocket 成功', JSON.stringify(event), new Date().toLocaleTimeString()])
      this.heartBeat()
    })

    this.socket.onClose((event) => {
      console.log('监听 websocket 连接断开', event)
      this.globalData.closeHandleEvent && this.globalData.closeHandleEvent()
      clearTimeout(this.sendTimer)
      clearTimeout(this.receiveTimer)
      this.socket = null
      log.add(['websocket 断开', JSON.stringify(event), new Date().toLocaleTimeString()])
    })

    // 监听消息事件
    this.socket.onMessage((event) => {
      // console.log('接受到服务器的消息事件', event, new Date().toLocaleTimeString())
      const data = JSON.parse(event.data)
      if (data.msgType === 200) {
        // 接受心跳回执
        this.heartBeat()
      } else {
        // 后台需要前端把接受的信息原封不动再返回给后台
        this.socket.send({ data: event.data })
        this.globalData.msgHandleEvent && this.globalData.msgHandleEvent(data)
      }
    })

    // 监听错误
    this.socket.onError((event) => {
      console.log('监听 WebSocket 错误事件', event)
    })
  },

  /**
   * 关闭 WebSocket 连接
   */
  closeConnection() {
    this.socket && this.socket.close()
    this.socket = null
    this.lockReconnect = true
    this.connectNums = 0
    // this.globalData.closeHandleEvent = null
    // this.globalData.msgHandleEvent = null
  },

  /**
   * 心跳检测
   * 每隔10s发送一次心跳
   * 发送心跳后30s未收到回执重连（服务端超时时间3000）
   */
  heartBeat() {
    clearTimeout(this.sendTimer)
    clearTimeout(this.receiveTimer)
    const that = this
    this.sendTimer = setTimeout(() => {
      this.socket.send({
        data: '{"msgType":100}',
        success(e) {
          that.receiveTimer = setTimeout(() => {
            that.reconnect()
          }, 30000)
        },
      })
    }, 10000)
  },
  /**
   * 重连
   */
  reconnect() {
    if (this.lockReconnect || this.connectNums > 2) return
    // this.closeConnection()
    // 隔一会重连，设置延迟避免请求过多
    clearTimeout(this.reConnectTimer)
    this.reConnectTimer = setTimeout(() => {
      log.add(['websocket 重连', new Date().toLocaleTimeString()])
      this.connectNums++
      this.connect(this.globalData.traceId, this.globalData.msgHandleEvent)
      this.lockReconnect = false
    }, 4000)
  },
})
