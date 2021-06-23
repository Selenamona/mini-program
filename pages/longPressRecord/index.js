Page({
  /**
   * 页面的初始数据
   */
  data: {
    btnText: "按住说话",
    playURL: ""
  },

  /**
   * 开始录制
   */
  startRecord(e) {
    console.log("clickEvent", e);
  },
  /**
   * 手指触摸动作开始
   */
  handleTouchstart(e) {
    console.log("touchstart");
    this.recorderManager.start({
      duration: 5000,
      sampleRate: 16000, // 采样率
      numberOfChannels: 1
    })
  },
  /**
   * 手指触摸后移动
   */
  handleTouchmove(e) {
    console.log("touchmove", e);
  },
  /**
   * 手指触摸动作结束
   */
  handleTouchend(e) {
    console.log("touchend");
    this.setData({
      btnText: "按住说话"
    });
  },
  /**
   * 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
   */
  handleLongpress(e) {
    console.log("longpress");
    this.setData({
      btnText: "松开发送"
    });
  },

  /**
   * 播放音频
   */
  playRecord(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.data.playURL
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log("播放音频报错",res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取全局唯一的录音管理器
    this.recorderManager = wx.getRecorderManager()
    // 监听录音开始
    this.recorderManager.onStart(() => {
      console.log('监听录音开始')
    })
    this.recorderManager.onError((errMsg) => {
      console.log('监听录音报错', errMsg)
    })
    // 监听录音结束
    this.recorderManager.onStop(res => {
      console.log('监听录音结束', res)
      const { tempFilePath } = res
      this.setData({
        playURL: tempFilePath
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
});
