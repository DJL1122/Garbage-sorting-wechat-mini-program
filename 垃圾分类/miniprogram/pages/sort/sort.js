const app = getApp();
Page({
  data: {
    ColorList: [
      "../../images/recycle.gif",
      "../../images/bad.gif",
      "../../images/shi.gif",
      "../../images/other.png",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2500,
    duration:1000,
  },
  goSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onClick:function(e){
   // console.log(JSON.stringify(e))
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
        url: '/pages/sort/detail/index?type=' + (index+1)

    })
  }
})