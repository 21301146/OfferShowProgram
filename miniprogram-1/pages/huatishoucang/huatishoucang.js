// pages/huatishoucang/huatishoucang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{},
    isShoucang:false
  },

  addHuati:function(e){
    var that = this;
    console.log(e)
    wx.request({
      url: 'http://localhost/huatishoucang/insert', 
      data: JSON.stringify(that.data.item), 
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      success: (res)=> {
        console.log(res)
        this.setData({
          isShoucang:true
        })
      },
      fail: (err)=>{
        console.log(err)
      }
    })
  },

  cancelHuati:function(e){
    var that = this;
    console.log(e)
    var detail = that.data.item.detail;
    wx.request({
      url: `http://localhost/huatishoucang/delete?detail=${detail}`,  
      method: 'DELETE',
      header: {'Content-Type': 'application/x-www-form-urlencoded'},
      success: (res)=> {
        console.log(res)
        this.setData({
          isShoucang:false
        })
      },
      fail: (err)=>{
        console.log(err)
      }
    })
  },
     
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      item:JSON.parse(options.item),
      // isShoucang:this.data.isShoucang
    })
    // console.log(options.item)
    // console.log(this.data.isShoucang)
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