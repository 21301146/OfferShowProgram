// pages/dongtai/dongtai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      {
        title:"校招",
        path:"xiaozhao",
        id:0,
        list:[]
      },
      {
        title:"实习",
        path:"shixi",
        id:1,
        list:[]
      },
      {
        title:"热门",
        path:"remen",
        id:2,
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
      url: `http://localhost/dongtai/${path}`,
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
          // [`nav[${id}].list`]: [...`this.data.nav[${id}].list`...res.data]
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '数据加载中',
    })
    // 在页面一加载就显示默认的校招页面
    wx.request({
      url: 'http://localhost/dongtai/xiaozhao',
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