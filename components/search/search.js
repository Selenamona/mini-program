// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    data:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        },()=>{
          let arr = [1,2,3,4,5,6];
          for(let i =0; i < arr.length; i++){
            arr[i] += this.data.inputVal
          } 
          this.setData({
            data: arr 
          })
        });
    }
  }
})
