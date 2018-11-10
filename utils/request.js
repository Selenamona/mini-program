
const md5 = require('./md5')
const md52 = require('./md52')

const baseUrl = "http://test-bi.bdp.yxqiche.com"

/**
 * 网络请求封装
 * @param url 请求路径 必填
 * @param params 请求参数 
 * @param method 请求方式 POST/GET等，默认 POST
 * @param showLoading 是否显示loading 默认 false->显示
 * @param hasFail 是否自定义处理失败回调函数，默认 false，不处理
 */

const request = (url,params,method,showLoading,hasFail) => {
    if(!showLoading){ // 默认都有loading
        wx.showLoading({
            title: '加载中',
        })
    } 
    console.log(params,md5.hexMD5(params),md52(params),'params')
   return new Promise((resolve, reject) => {
       wx.request({
           url: `${baseUrl}${url}`,
        //    url: `${url}`,
           method: method?method:"POST",
           data: params?md5.hexMD5(params):params,
           header: {
               'Content-Type': 'application/json; charset=UTF-8',
           },
           success(request) {
               setTimeout(() => {
                    if(!showLoading){
                        wx.hideLoading()
                    } 
                    // console.log(request,999)
                    if (request.statusCode === 200) { // 微信小程序返回状态码
                        if(request.data.code === '000000'){ // 后台接口返回码值
                            resolve(request.data.data)
                        }else{
                            if(hasFail){
                                reject(request.data.message) 
                            }else {
                                wx.showModal({
                                    title: '提示',
                                    content: request.data.message,  // message ？ 待确认？ 
                                    showCancel: false 
                                })
                            }
                        }
                    } else {
                        // reject(request.data) 
                        wx.showModal({
                            title: '提示',
                            content: request.errMsg,   
                            showCancel: false
                        })
                    }
               }, 1000); 
           },
           fail(error) {
                if(!showLoading){
                    wx.hideLoading()
                } 
                // reject(error.data)
                wx.showModal({
                    title: '提示',
                    content: error.data,   
                    showCancel: false
                })
           }
       })
   })
} 

module.exports = {
    request
};