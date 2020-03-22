Page({
  data: {},
  onLoad() {},

  request() {

    my.request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      data: {
        from: '支付宝',
        production: 'AlipayJSAPI',
      },
      headers:{
        'content-type':'application/json'  //默认值
      },
      dataType: 'json',
      success: function(res) {
        my.alert({content: 'success:'+JSON.stringify(res)});
      },
      fail: function(res) {
        my.alert({content: 'fail'+JSON.stringify(res)});
      },
      complete: function(res) {
        my.hideLoading();
        my.alert({content: 'complete'+JSON.stringify(res)});
      }
    });
  },

});
