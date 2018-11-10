// pages/select/select.js
const date = new Date()
const years = []
const months = []
const monthsLong = []
const days = []
const daysLong = []
const values = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
values.push(years.length-1)
values.push(date.getMonth())
values.push(date.getDate()-1)
years.push('长期')

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}
monthsLong.push('长期')

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}
daysLong.push('长期')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2018-11-05',
    dateLs:'',
    years: years,
    months: months,
    days: days,
    value: values, 
    hideMask:true,
    hidePick:true,
    canClick:false,
    preMonths:0,
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

  },

  bindDateChange: function(e) { // pick 
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  }, 
  dateSelect(){
    this.setData({
      hideMask: false,
      hidePick: false,
    })
  }, 
  bindChange(e) { // 自定义日期选择 pick-view
    let val = e.detail.value  
    console.log(val) 
    this.data.canClick = true;
    let year = this.data.years[val[0]]; 
    if(year == '长期'){  // 选择长期
      this.setData({
        months:monthsLong,
        days: daysLong
      },()=>{
        val[1] = 0;
        val[2] = 0;
        this.data.dateLs = year;
        this.setData({
          value: val,
        },()=>{
          this.data.canClick = false;
        })
      }) 
    }else{ // 选择年份
      let _this = this;
      function setDateLs(){ // 根据月份 修改日天数
        let month = _this.data.months[val[1]];  
        if(_this.data.preMonths==val[1]){
          let day = _this.data.days[val[2]]; 
          _this.data.dateLs = year + '-' + month + '-' + day; 
          _this.data.canClick = false;
        }else{
          _this.data.preMonths = val[1]; // 选中月份index
          let dayNum = _this.getDaysInMonth(year,month);
          let dayInMonth = [];
          for (let i = 1 ; i <= dayNum; i++) {
            dayInMonth.push(i)
          } 
          _this.setData({ 
            days: dayInMonth
          },()=>{
            let day = _this.data.days[val[2]];
            _this.data.dateLs = year + '-' + month + '-' + day; 
            _this.data.canClick = false; 
          })
        }
        


        // ---------------------------------
        // let month = _this.data.months[val[1]];  
        // let dayNum = _this.getDaysInMonth(year,month);
        // if(dayNum == _this.data.days.length){
        //   let day = _this.data.days[val[2]]; 
        //   _this.data.dateLs = year + '-' + month + '-' + day; 
        //   _this.data.canClick = false;
        // }else{
        //   let dayInMonth = [];
        //   for (let i = 1 ; i <= dayNum; i++) {
        //     dayInMonth.push(i)
        //   } 
        //   _this.setData({ 
        //     days: dayInMonth
        //   },()=>{
        //     let day = _this.data.days[val[2]];
        //     _this.data.dateLs = year + '-' + month + '-' + day; 
        //     _this.data.canClick = false; 
        //   })
        // }
      } 
      if(this.data.months.length==1){ // 长期-年份
        this.setData({
          months:months,
          days: days
        },setDateLs)
      }else{ // 年份-年份
        setDateLs();
      } 
    } 
  }, 
  cancel(){
    this.setData({
      hideMask: true,
      hidePick: true,
    })
  },
  ok(){
    console.log(this.data.dateLs,'已确认')
    if(!this.data.canClick){
      if(this.data.dateLs){ // 防止 未选择日期-确认-清空日期展示
        this.setData({
          date: this.data.dateLs 
        })  
      } 
      this.cancel();
    } 
  },
  getDaysInMonth(year,month){ // 根据年月获得当月天数
    month = parseInt(month,10);   
    var temp = new Date(year,month,0);
    return temp.getDate();
  }
})