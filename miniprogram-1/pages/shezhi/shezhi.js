// pages/shezhi/shezhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:'',
    user:{
      touxiang:'/images/wo/默认头像.png',
      nicheng:'热心用户',
      qianming:'签名'
    },
    hideModal:true, 
    animationData:{},
    nav:[
      {
        title:'男',
        id:0,
        images:[
          {id:0,path:'/images/shezhi/男孩1.png'},{id:1,path:'/images/shezhi/男孩2.png'},{id:2,path:'/images/shezhi/男孩3.png'}
        ]
      },
      {
        title:'女',
        id:1,
        images:[
          {id:0,path:'/images/shezhi/女孩1.png'},{id:1,path:'/images/shezhi/女孩2.png'},{id:2,path:'/images/shezhi/女孩3.png'}
        ]
      }
    ],
    curTopNav:0,
    cueIndex:0,
    curNav:0,
    curIndex:0
  },

  inputNicheng: function(e){
    this.setData({
      ['user.nicheng'] : e.detail.value
    })
  },

  inputQianming: function(e){
    this.setData({
      ['user.qianming'] : e.detail.value
    })
  },

  //显示遮罩层，并从底部逐渐弹出内容，即
  showModal: function () {
    var that=this;
    that.setData({
      hideModal:false,
      curTopNav:0,
      curTopIndex:0,
      curTopNav:0,
      curIndex:0
    })
    //创建一个动画实例 animation
    var animation = wx.createAnimation({
      duration: 600,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation 
    setTimeout(function(){
      that.fadeIn();//调用显示动画
    },200)   
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this; 
    var animation = wx.createAnimation({
      duration: 200,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown();//调用隐藏动画   
    setTimeout(function(){
      that.setData({
        hideModal:true
      })      
    },720)//先执行下滑动画，再隐藏模块  
  },

  //向上平移动画
  fadeIn:function(){
  	//translateY对 Y 轴平移,step()表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
    this.animation.translateY(0).step()
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })    
  },
  //向上平移动画
  fadeDown:function(){
    this.animation.translateY(1000).step()
    this.setData({
      //导出动画队列。export 方法每次调用后会清掉之前的动画操作。
      animationData: this.animation.export(),  
    })
  }, 

  topNavTap(e){
    let id = e.currentTarget.dataset.id;
    this.setData({
      curTopNav:id,
      curTopIndex:id
    })
  },

  navTap(e){
    let that = this;
    let id = e.currentTarget.dataset.id;
    let topId = e.currentTarget.dataset.message;
    console.log(topId,id);
    this.setData({
      curTopNav:topId,
      curTopIndex:topId,
      curNav:id,
      curIndex:id,
      'user.touxiang':that.data.nav[`${topId}`].images[`${id}`]
    })
  },

  queren:function(e){
    let that = this;
    // let ni = that.data.user.nicheng;
    // let qian = that.data.user.qianming;
    // console.log(ni,qian);
    let pages = getCurrentPages();//获取page
    let prevPage = pages[pages.length-2];//上一个页面（父页面）
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去，user此参数必须在上一页面中的data声明定义。否则传递失败。
    prevPage.setData({
      user:that.data.user
    })

    //同时更新数据库中的user表
    wx.request({
      url:'http://localhost/wo/update',
      method:'PUT',
      data:JSON.stringify(that.data.user),
      header:{
        'content-tpye':'application.json'
      },
      success:(res)=>{
        console.log(res)
      },
      fail:(err)=>{
        console.log(err)
      }
    })
    
    //返回上一页面
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      path:options.path,
      'user.nicheng':options.nicheng,
      'user.qianming':options.qianming
    })
    // console.log(options.path)
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