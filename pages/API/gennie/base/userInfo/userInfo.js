Page({
  data: {},
  onLoad() {},

  getGenieUserInfo() {
    my.call('getGenieUserInfo', function(result) {
      my.alert({
        content: JSON.stringify(result)   // userId
      })
    })
  },

 onGetOpenUserData() {
    my.call('getOpenUserData', function(result) {
      my.alert({
        content: 'getOpenUserData:'+JSON.stringify(result)
      })
    })
  },

  onGetPhoneNumber(res) {
    my.getPhoneNumber({
      success: (res) => {
        my.alert({
          content: 'getPhoneNumber success:'+JSON.stringify(res)
        })
      },
      fail: (res) => {
          my.alert({
            content: 'getPhoneNumber fail:'+JSON.stringify(res)
        })
      },
    });
  }

});
