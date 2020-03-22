Page({
  data: {},
  onLoad() {},

  getGenieUserInfo() {
    my.call('getGenieUserInfo', function(result) {
      my.alert({
        content: JSON.stringify(result)   // userId
      })
    })
  }

});
