// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:'',
    nav:[
      {
        title:"薪资",
        path:"xinzi",
        id:0,
        list:[]
      },
      {
        title:"话题",
        path:"huati",
        id:1,
        list:[]
      }
    ],
    curNav:0,
    curIndex:0,
    checkedList:[]
  },

  navTap(e){
    let id = e.currentTarget.dataset.id;
    var that = this;
    let path = that.data.nav[id].path;
    this.setData({
      curNav:id,
      curIndex:id
    })
    // console.log(id);
    //展示加载效果
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `http://localhost/wo/${path}`,
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

  // 复选框的选中事件
  HandelItemChange:function(e){
    // 1 获取被选中的复选框的值
    console.log(e.detail.value)
    const checkedList = e.detail.value;
    // 2 进行赋值
    this.setData({
      checkedList
    })
  },

  // 删除选中列表
  shanchu:function(e){
    let path = e.currentTarget.dataset.message;
    console.log(path);
    // 如果没有选中，则提示
    if(this.data.checkedList.length==0){
       return wx.showToast({
        title: '您还没有选择',
        icon:'none'
      })
    }
    // 发送DELETE请求
    wx.request({
      url:`http://localhost/${path}/delete?details=${this.data.checkedList}`,
      method:'DELETE',
      header: {'Content-Type': 'application/x-www-form-urlencoded'},
      success:(res)=>{
        console.log(res)
        // 把选中列表重新置为空
        this.setData({
          checkedList:[]
        })
        wx.showToast({
          title: '取消收藏成功',
          icon:'none',
          duration:500
        })
        // 回到上一个页面
        wx.navigateBack({
          delta:1
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      path:options.path
    })
    wx.showLoading({
      title: '数据加载中',
    })
    // 在页面一加载就显示默认的薪资页面
    wx.request({
      url: 'http://localhost/wo/xinzi',
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