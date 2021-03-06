// pages/other/two/two.js
var order = ['red','yellow','blue','green','red']

Page({

  data: {
    toView: 'green',
    scrollTop: 100,
    scrollLeft: 0
  },
  // 滚动条滚到顶部时触发
  upper:function(e){
    // console.log(e)
  },
  // 滚动条滚到底部的时候触发
  lower:function(e){
    // console.log(e)
  },
  // 滚动条滚动后触发
  scroll:function(e){
    // console.log(e)
  },
  // 点击按钮切换到下一个view
  tap:function(e){
    for(var i = 0;i < order.length; i++){
      if(order === this.data.toView){
        this.setData({
          toView:order[i + 1]
        })
        break
      }
    }
  },
  // 通过设置滚动条位置实现画面滚动
  tapMove:function(e){
    this.setData({
      scrollLeft:this.data.scrollLeft + 10
    })
  },
  // camera拍照
  takePhoto(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src:res.tempImagePath
        })
      }
    })
  },
  error(e){
    console.log(e.detail)
  }
  
})
