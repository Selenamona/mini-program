// components/date-pick.js
let date = new Date() 

// 根据年月获得当月天数
function getDaysInMonth(year,month){ 
  month = parseInt(month,10);   
  let temp = new Date(year,month,0);
  return temp.getDate();
}
// 获取 years months days  
function getArr(length,start){
  let arr = [];
  let n = start?start:1
  for (let i = n; i < length; i++) {
    arr.push(i);
  }
  return arr;
}

// 默认展示年月日
let years = getArr(date.getFullYear()+50,1999)  
let months = getArr(13)  
const num = getDaysInMonth(date.getFullYear(),date.getMonth()+1)
let days = getArr(num+1) 

// 打开控件，默认当前日期 
let values = [years.length-1,date.getMonth(),date.getDate()-1] 

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'hideMask':{
      type:Boolean,
      value:true, 
    },
    'hidePick':{
      type:Boolean,
      value:true, 
    },
    "ifLong":{
      type:String,
      value:'',
      observer(n,o){
        if(n=="长期"){
          years.push('长期')
          values = [years.length-2,date.getMonth(),date.getDate()-1]  
          this.setData({
            // years: years,
            // value: values,
            multiArray: [years,months,days]
          })
        }
      }
    }
  }, 
  /**
   * 组件的初始数据
   */
  data: { 
      years: years,
      months: months,
      days: days,
      value: values,
      disBtn: false,
      multiArray:[years,months,days],
      multiIndex:[0, 0, 0],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMultiPickerColumnChange(e){
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:  // 选择年
          if(years[data.multiIndex[0]]=="长期"){
            data.multiArray[1] = ['长期']
            data.multiArray[2] = ['长期']
          }else {
            data.multiArray[1] = months
            let daysTotal = getDaysInMonth(years[data.multiIndex[0]],months[data.multiIndex[1]]);
            data.multiArray[2] = getArr(daysTotal+1);
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:  // 选择月 
          let daysTotal = getDaysInMonth(years[data.multiIndex[0]],months[data.multiIndex[1]]);
          data.multiArray[2] = getArr(daysTotal+1);
          data.multiIndex[2] = 0;
          break;
      }
      this.setData(data);
    },
    bindMultiPickerChange(e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      },()=>{
        if(this.data.multiArray[0][this.data.multiIndex[0]]=="长期"){
          date = "长期"
        }else {
          date = this.data.multiArray[0][this.data.multiIndex[0]] +"-"+ this.data.multiArray[1][this.data.multiIndex[1]] +"-"+ this.data.multiArray[2][this.data.multiIndex[2]] 
        }
        this.triggerEvent('setDate',{date:date})
      })
    },
    setDate(arr){ // 设置日期
        this.setData({
          disBtn: true
        })
        console.log(this.data.disBtn,'选择日期') 
        if(arr[0]==years.length-1){ // 选择长期
          this.setData({
            days:['长期'],
            months:['长期'],
          })  
          date = '长期';
          this.setData({
            disBtn: false
          })
        } else {
          if(this.data.months[0] == "长期"){
            this.setData({
              months:months,
              days:getArr(32)
            },()=>{
              date = years[arr[0]] + "-" + months[arr[1]] + "-" + days[arr[2]]
              this.setData({
                disBtn: false
              })
            })
          }else{
            let daysNum = getDaysInMonth(years[arr[0]], months[arr[1]]);
            if(daysNum !== days.length){ // 不相同天数
              console.log('不同')
              days = getArr(daysNum+1) 
              this.setData({
                days:days
              },()=>{
                date = years[arr[0]] + "-" + months[arr[1]] + "-" + days[arr[2]]
                this.setData({
                  disBtn: false
                })
              })
            } else {
              date = years[arr[0]] + "-" + months[arr[1]] + "-" + days[arr[2]] 
              this.setData({
                disBtn: false
              })
            } 
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
        // 向父组件传递数据
        this.triggerEvent('setDate',{date:date})
        this.cancel();
    }, 
    bindChange: function (e) {
        let val = e.detail.value
        this.setDate(val);
    } 
  }
})
