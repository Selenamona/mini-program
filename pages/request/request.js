const Http = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    isShow:false,
  },


  getData(){
    Http.request("/base/deal/queryConditions?debug=true&debug_account=muweitao",JSON.stringify({
      name:"maodng "
    })).then(res => {
      console.log(res,98);
      this.setData({
        data:res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
})
