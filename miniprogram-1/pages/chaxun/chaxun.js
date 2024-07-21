// pages/chaxun/chaxun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grid_list:[],  //六宫格
    nav:[
      {
        title:"近期爆料",
        path:"recentbaoliao",
        id:0,
        list:[]
      },
      {
        title: "金融专栏",
        path:"jinrong",
        id: 1,
        list:[]
      },
      {
        title: "研究生补助",
        path:"yanjiusheng",
        id: 2,
        list:[]
      },
      {
        title: "自动驾驶",
        path:"qiche",
        id: 3,
        list:[]
      },
      {
        title: "薪资快讯",
        path:"xinzikuaixun",
        id: 4,
        list:[]
      },
      {
        title: "Offer选择",
        path:"offerxuanze",
        id: 5,
        list:[]
      },
      {
        title: "求职避坑",
        path:"qiuzhi",
        id: 6,
        list:[]
      }
    ],
    curNav:0,
    curIndex:0
  },

  navTap(e){
    let id = e.currentTarget.dataset.id;
    var that = this;
    let path = that.data.nav[id].path;
    // console.log(id);
    //展示加载效果
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `http://localhost/chaxun/nav/${path}`,
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          curNav:id,
          curIndex:id,
          [`nav[${id}].list`]: res.data
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
      title: '数据加载中',
    })
    // 显示六宫格
    wx.request({
      url: 'http://localhost/chaxun/xinzeng',
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          grid_list: res.data
        })
      },
      fail:(res)=>{
        console.log(res)
      }
    }),
    // 在页面一加载就显示默认的近期爆料页面
    wx.request({
      url: 'http://localhost/chaxun/nav/recentbaoliao',
      method: 'GET',
      header: {
        'content-type': 'application.json'
      },
      success: (res)=>{
        console.log(res.data)
        this.setData({
          curNav:0,
          curIndex:0,
          'nav[0].list': res.data
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