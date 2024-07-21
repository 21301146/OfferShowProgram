// pages/zhuanlan/zhuanlan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topNav:[
      {
        title:"求职专栏",
        id:0,
        navList:[
          {
            title:"发现",
            path:"faxian",
            id:0,
            list:[]
          },
          {
            title:"薪资快讯",
            path:"xinzikuaixun",
            id:1,
            list:[]
          },
          {
            title:"Offer选择",
            path:"offerxuanze",
            id:2,
            list:[]
          },
          {
            title:"求职避坑",
            path:"qiuzhi",
            id:3,
            list:[]
          }
        ]
      },
      {
        title:"薪资专栏",
        id:1,
        navList:[
          {
            title:"金融专栏",
            path:"jinrong",
            id:0,
            list:[]
          },
          {
            title:"HR专场",
            path:"hr",
            id:1,
            list:[]
          },
          {
            title:"研究生补助",
            path:"yanjiusheng",
            id:2,
            list:[]
          },
          {
            title:"自动驾驶",
            path:"qiche",
            id:3,
            list:[]
          }
        ]
      }
    ],
    curTopNav:0,
    curTopIndex:0,
    curNav:0,
    cueIndex:0
  },

  topNavTap(e){
    let id = e.currentTarget.dataset.id;
    var that = this;
    let path = that.data.topNav[`${id}`].navList[0].path;
    wx.request({
      url: `http://localhost/zhuanlan/${path}`,
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          curTopNav:id,
          curTopIndex:id,
          curNav:0,
          curIndex:0,
          [`topNav[${id}].navList[0].list`]: res.data
        })
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },

  navTap(e){
    let topId = e.currentTarget.dataset.message;
    let id = e.currentTarget.dataset.id;
    // console.log(topId,id)
    var that = this;
    let path = that.data.topNav[`${topId}`].navList[`${id}`].path;
    // console.log(id);
    //展示加载效果
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `http://localhost/zhuanlan/${path}`,
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          curNav:id,
          curIndex:id,
          [`topNav[${topId}].navList[${id}].list`]: res.data
        })
      },
      fail:(res)=>{
        console.log(res)
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  },

  changeXinzi:function(e){
    var it = e.currentTarget.dataset.message;
    // console.log(it);
    // console.log(typeof(it))
    var item=JSON.stringify(it)
    // console.log(item);
    wx.navigateTo({
      url: `/pages/xinzishoucang/xinzishoucang?item=${item}`,
    })
  },

  changeHuati:function(e){
    var it = e.currentTarget.dataset.message;
    var item=JSON.stringify(it)
    // console.log(it);
    wx.navigateTo({
      url: `/pages/huatishoucang/huatishoucang?item=${item}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://localhost/zhuanlan/faxian',
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          curTopNav:0,
          curTopIndex:0,
          curNav:0,
          curIndex:0,
          'topNav[0].navList[0].list': res.data
        })
      },
      fail:(res)=>{
        console.log(res)
      },
      complete:()=>{
        wx.hideLoading()
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