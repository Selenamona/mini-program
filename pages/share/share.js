const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobNum:"",
    query:{},
    hasModal:true,
    hideMask:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query:app.globalData.query
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  shareTest(){
    console.log("输入工号")
    this.setData({
      hideMask: false,
      hasModal: false
    })
  },
  bindinput(e){
    this.setData({
      jobNum: e.detail.value,
    })
  },
  cancel(){
    this.setData({
      hasModal: true,
      hideMask: true,
      jobNum:"",
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {

    wx.showShareMenu({
      withShareTicket:true
    });
    console.log(this,this.data.jobNum,877);

    // console.log(app.globalData.userInfo,app.globalData.userInfo.nickName,"用户信息");
    return {
      title: '自定义转发标题',
      path: 'pages/share/share?jobNum=' + this.data.jobNum,
      success: function(res) {
        console.log(res,'分享成功');

      },
    }
  }
})
