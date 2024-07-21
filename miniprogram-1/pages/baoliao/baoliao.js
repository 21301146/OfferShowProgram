// pages/baoliao/baoliao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{ id: 1, name: '校招' }, { id: 2, name: '实习' }],
    baoliao:{
      companyName: '百度',
      job:'软件工程师',
      city:'北京',
      wage:'15k',
      lowWage:'10k',
      highWage:'20k',
      type:'',
      qualification:'本科',
      profession:'软件开发',
      detail:'软件开发'
    }
  },

  inputCompany: function(e){
    this.setData({
      ['baoliao.companyName'] : e.detail.value
    })
  },

  inputJob: function(e){
    this.setData({
      ['baoliao.job'] : e.detail.value
    })
  },

  inputCity: function(e){
    this.setData({
      ['baoliao.city'] : e.detail.value
    })
  },

  inputWage: function(e){
    this.setData({
      ['baoliao.wage'] : e.detail.value
    })
  },

  inputLow: function(e){
    this.setData({
      ['baoliao.lowWage'] : e.detail.value
    })
  },

  inputHigh: function(e){
    this.setData({
      ['baoliao.highWage'] : e.detail.value
    })
  },

  inputQual: function(e){
    this.setData({
      ['baoliao.qualification'] : e.detail.value
    })
  },

  inputPro: function(e){
    this.setData({
      ['baoliao.profession'] : e.detail.value
    })
  },

  inputDetail: function(e){
    this.setData({
      ['baoliao.detail'] : e.detail.value
    })
  },

  selectType: function(e){
    let id = e.currentTarget.dataset.id
    // console.log(e.currentTarget.dataset.text)
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.buttons[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.buttons[i].checked = false;
      }
    }
    this.setData({
      buttons: this.data.buttons,
      ['baoliao.type'] : e.currentTarget.dataset.text
    })
  },

  isCommit:function(e){
    var that = this;
    console.log(that.data.baoliao)
    wx.request({
      url: 'http://localhost/baoliao/insert', 
      data: JSON.stringify(that.data.baoliao), 
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      success: (res)=> {
        console.log(res)
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
    this.data.buttons[0].checked = true;
    this.setData({
      buttons: this.data.buttons,
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