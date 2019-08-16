//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    article_list: [
      {
        "picture": "/pages/image/10.jpg",
        "title": "python_10秒钟入门到大神",
        "description": "ython 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time": "1991-01-01"
      },
      {
        "picture": "/pages/image/9.jpg",
        "title": "python_1.5年半神到跑路",
        "description": "ython 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time": "1991-05-01"
      },
      {
        "picture": "/pages/image/6.jpg",
        "title": "python_3年一万到三万",
        "description": "ython 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time": "1991-03-01"
      },
      {
        "picture": "/pages/image/8.jpg",
        "title": "python_5年挪威森林到地中海",
        "description": "ython 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time": "1991-02-01"
      },

    ]
  }
})