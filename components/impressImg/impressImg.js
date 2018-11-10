// components/impressImg/impressImg.js
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
    src:"",
    devWidth:"",
    imgHeight:'', 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    downLoadImg(path){
      // 下载图片到本地
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success: (res) => {
          console.log(res,'下载成功') 
        }
      }) 
    },
    // 从相册选择图片
    choosePhoto(){
      console.log("从相册选择图片")
      wx.chooseImage({
        count: 1,
        sizeType: ['original'], // 'compressed'
        sourceType: ['album', 'camera'],
        success: (res)=> {
          // 原图片路径
          let imgPath = res.tempFilePaths[0]; 
          // 小程序 API 压缩
          wx.compressImage({
            src: imgPath, 
            quality: 50,  
            success:(e)=>{ 
              // 获取压缩后图片宽高
              wx.getImageInfo({
                src: e.tempFilePath,
                success: (info) => {     
                  this.setData({
                    imgHeight:this.data.devWidth*info.height/info.width
                  },()=>{
                    // 页面展示压缩后图片
                    this.setData({
                      src: e.tempFilePath
                    })
                  })
                }
              }) 
              // 下载图片
              this.downLoadImg(e.tempFilePath); 
            }
          })  
        }
      })
    },
    // 预览图片
    previewImg(e){
      wx.previewImage({
        urls: [e.target.dataset.url]  
      })
    },
  },
  attached(){
    // 获取设备信息
    wx.getSystemInfo({
      success:(info)=>{
        this.setData({
          devWidth:info.screenWidth
        })
      }
    })
  }
})
