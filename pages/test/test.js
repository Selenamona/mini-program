// pages/test/test.js
import Http from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    hideMask:true,
    hidePick:true, 
    isShow: false
  },
  showAction(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  showMask() {
    this.setData({ 
        isShow: true
    })  
    setTimeout(()=>{
      this.setData({ 
        isShow: false
      }) 
    },1000)
  },
  uploadImg() {
    // 调用子组件的方法
    this.selectComponent("#upload-img").choosePhoto();
  },
  selectDate(){ // 选择日期
    this.setData({
      hideMask:false,
      hidePick:false,
    }) 
  },
  setDate(e){
    this.setData({
      date:e.detail.date
    })
  },
  geth5faceid(){
    // 1. Access Token 获取
    Http.request("https://idasc.webank.com/api/oauth2/access_token",{
      app_id:"TIDAfpaQ",
      secret:"M0HwKWoFvYySxKiJXP89K4FWtgOXAQBpLYOaLtlFDLdhzpIpBL0LcA8ppDcyB1K0", 
      grant_type:"client_credential",
      version:"1.0.0"
    },"GET").then(res=>{
      console.log(res,"Access Token 获取")
      // res.access_token
    }).catch(e=>{
      console.log(e)
    })

    // 2. SIGN ticket 获取
    Http.request("https://idasc.webank.com/api/oauth2/api_ticket",{
      app_id:"TIDAfpaQ",
      access_token:"WAA0f-dGGlQHTVClazkxtmW6FX_nRhpUB01QpWs5MbZluhVQmrW9E0FpiJX9FIqr26uu814x74CCqqSg0lmuG26YsQ", 
      type:"SIGN",
      version:"1.0.0"
    },"GET").then(res=>{
      console.log(res,"SIGN ticket 获取")
      // res.tickets
      // 3. 合作方后台上送身份信息
      // Http.request("https://idasc.webank.com/api/server/h5/geth5faceid",{
      //   webankAppId:"TIDAfpaQ",
      //   orderNo:'orderNo201810300000015',
      //   name:"马冬雪",
      //   idNo:"130828199302160844",
      //   userId:'userID201810300000015'
      //   sourcePhotoType:1, 
      //   version:"1.0.0",
      //   sign:res.tickets[0].value
      // },"GET").then(res=>{
      //   console.log(res,"SIGN ticket 获取")
      //   // res.tickets
  
        
  
      // }).catch(e=>{
      //   console.log(e)
      // })


    }).catch(e=>{
      console.log(e)
    })



    // Http.request("https://idasc.webank.com/api/server/h5/geth5faceid",{
    //   webankAppId:"TIDAfpaQ",
    //   orderNo:,
    //   name:
    //   idNo:
    //   userId:
    //   sourcePhotoType:1,
    //   version:1.0.0,
    //   sign
    // }).then(res=>{
    //   console.log(res)
    // }).catch(e=>{
    //   console.log(e)
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})