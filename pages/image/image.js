Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    src2:"",
    canvasWidth:'',
    canvasHeight:'',
    imgSizeF:"0KB",
    imgSizeB:0,
    devWidth:"",
    imgWHF:"0",
    imgWHB:"0",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.ctx =  wx.createCameraContext();
    wx.getSystemInfo({
      success:(info)=>{
        this.setData({
          devWidth:info.screenWidth
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
  ifCompress(size,path){
    // 获取原图片宽高
    wx.getImageInfo({
      src: path,
      success: (e) => {
        // 设置压缩前宽高
        this.setData({
          imgWHF:e.width+"px-"+e.height+"px"
        })
        if(size>500){
          console.log('图片大于500KB')
          this.compressImg(path,e.width,e.height)
        }else{
          this.downLoadImg(path);
        }
      }
    })
    // 图片大于 500 KB 压缩
    // if(size>500){
    //   console.log("图片大于500KB")
      // 小程序 API 压缩
      // wx.compressImage({
      //   src: path, // 图片路径
      //   quality: 50, // 压缩质量
      //   success:(e)=>{
      //     // 获取API压缩图片大小
      //     wx.getFileInfo({
      //       filePath: e.tempFilePath,
      //       success: (res)=> {
      //         console.log((res.size/1024).toFixed(2),'小程序压缩后大小')
      //         // if(res.size/1024>500){
      //         //   // 获取API压缩图片宽高
      //         //   wx.getImageInfo({
      //         //     src: e.tempFilePath,
      //         //     success: (e) => {
      //         //       // canvas 压缩
      //         //       // this.compressImg(res.size/1024,e.width,e.height,path)
      //         //     }
      //         //   })
      //         // }else {
      //           this.downLoadImg(e.tempFilePath);
      //         // }
      //       }
      //     })
      //   }
      // })
    // }else{
    //   this.downLoadImg(path);
    // }
  },
  // 图片小于500KB，获取图片信息，下载图片
  downLoadImg(path){
    console.log(path,"下载路径")
      // 获取压缩后图片宽高
      wx.getImageInfo({
        src: path,
        success: (resp) => {
          console.log(resp,"获取图片信息2")
            this.setData({
              imgWHB:resp.width+ "px-"+ resp.height + "px"
            })
        }
      })
      // 获取压缩后图片大小
      wx.getFileInfo({
        filePath: path,
        success: (res)=> {
          // console.log(res,res.size/1024,'压缩后大小')
          this.setData({
            imgSizeB:Math.round(res.size/1024)+"KB"+(res.size/1024/1024).toFixed(2)+"M",
            src2: path
          })
          // 下载图片到本地
          wx.saveImageToPhotosAlbum({
            filePath: path,
            success: (res) => {
              console.log(res,'下载成功')
            }
          })
        }
      })
  },
  // 从相册选择图片
  choosePhoto(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original'], // ,'compressed'
      sourceType: ['album', 'camera'],
      success: (res)=> {
        // 原图片路径
        let imgPath = res.tempFilePaths[0];
        this.setData({
          src: imgPath
        })
        // 获取原图大小
        let _this = this;
        wx.getFileInfo({
          filePath: imgPath,
          success (res) {
            // 获取原图大小，页面展示
            _this.setData({
              imgSizeF:Math.round(res.size/1024)+"KB_"+(res.size/1024/1024).toFixed(2)+"M"
            })
            // 判断是否压缩
            _this.ifCompress(Math.round(res.size/1024),imgPath);
          }
        })
      }
    })
  },
  // canvas 压缩图片
  compressImg(imgPath,imgW,imgH){
    console.log(imgW,imgH,"canvas 压缩")
    const ctx = wx.createCanvasContext("canvas");
    let w = 350;
    let h = w*imgH/imgW;
    this.setData({
      canvasWidth: w,
      canvasHeight: h
    })
    console.log(w,h,999)
    ctx.drawImage(imgPath, 0, 0, w, h);
    ctx.draw(false,()=>{
      setTimeout(()=>{
        this.canvasToImg();
      },1000)
    });
  },
  // canvas 压缩后图片转换
  canvasToImg(w,h){
    let _this = this;
    wx.canvasToTempFilePath({
      canvasId:'canvas',
      quality:1,
      // destWidth:w*2,
      // destHeight:h*2,
      success:(res)=>{
        console.log(res,'canvasToImg success')
        // console.log()
        this.downLoadImg(res.tempFilePath)
      },
      fail:(e)=>{
        console.log(e,'canvasToTempFilePath fail')
      }
    })
  },
  // 拍照
  // takePhoto(){
  //   this.ctx.takePhoto({
  //     quality: 'high',
  //     success: (res) => {
  //       this.setData({
  //         src: res.tempImagePath
  //       })
  //       wx.getFileInfo({
  //         filePath: res.tempImagePath,
  //         success (res) {
  //           console.log(res,'文件信息')
  //           console.log(res.size/1024,'大小')
  //         }
  //       })
  //       // 下载图片到本地
  //       wx.saveImageToPhotosAlbum({
  //         filePath: res.tempImagePath,
  //         success: (res) => {
  //           console.log(res,'下载成功')
  //         }
  //       })
  //       wx.getImageInfo({
  //         src: res.tempImagePath,
  //         success (res) {;
  //           console.log(res,"拍照imgInfo")
  //         }
  //       })
  //     }
  //   })
  // },
})
