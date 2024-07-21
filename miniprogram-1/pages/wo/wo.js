// pages/wo/wo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      touxiang:'/images/wo/默认头像.png',
      nicheng:'热心用户',
      qianming:'签名'
    }
  },

  updateUser:function(e){
    // console.log(e.currentTarget.dataset.message)
    var path = e.currentTarget.dataset.message;
    let that = this;
    var ni = that.data.user.nicheng;
    var qian = that.data.user.qianming;
    wx.navigateTo({
      url: `/pages/shezhi/shezhi?path=${path}&nicheng=${ni}&qianming=${qian}`,
    })
  },

  checkMessage:function(e){
    // console.log(e.currentTarget.dataset.message)
    var path = e.currentTarget.dataset.message
    wx.navigateTo({
      url: `/pages/wode/wode?path=${path}`,
    })
  },

  showMessage:function(e){
    // console.log(e.currentTarget.dataset.message)
    var path = e.currentTarget.dataset.message
    wx.navigateTo({
      url: `/pages/show/show?path=${path}`,
    })
  },

  zhaoRen:function(){
    wx.navigateTo({
      url: '/pages/zhaoren/zhaoren',
    })
  },

  checkDetail:function(e){
    // console.log(e.currentTarget.dataset.message)
    var path = e.currentTarget.dataset.message
    wx.navigateTo({
      url: `/pages/detail/detail?path=${path}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url:'http://localhost/wo/user',
      method:'GET',
      header:{
        'content-type':'application.json'
      },
      success:(res)=>{
        console.log(res.data)
        this.setData({
          'user.nicheng':res.data.nicheng,
          'user.qianming':res.data.qianming
        })
        console.log(this.data.user)
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})