// pages/info/info.js
Page({

    /**
   * 页面的初始数据
   */
  data: {
    recuitList: [],
    inputValue: '',
    page:1, // 当前的页数
    pageSize:8, // 每页的最大数据量
    curPage:0, // 当前页共有多少条数据
    isLoading:false
  },

  inputChange: function(e){
    this.setData({
      inputValue: e.detail.value
    })
    // console.log(this.inputValue)
  },

  queryRecuits: function(){
    this.setData({
      isLoading:true
    })
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: `http://localhost/chaxun/query?name=${this.data.inputValue}&page=${this.data.page}&pageSize=${this.data.pageSize}`,
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          recuitList: this.data.recuitList.concat(res.data),
          curPage: res.data.length
        })
      },
      fail: (err)=>{
        console.log(err)
      },
      complete:()=>{
        wx.hideLoading()
        this.setData({
          isLoading:false
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    if(this.data.curPage<this.data.pageSize){
       return wx.showToast({
        title: '数据加载完毕',
        icon:'none'
      })
    }
    if(this.data.isLoading) return
    this.setData({
      page:this.data.page + 1
    })
    this.queryRecuits()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})