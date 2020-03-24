Page({
  data: {},
  onLoad() {
    // 页面显示
    my.setBackgroundColor({
      backgroundColor: 	'#FFC0CB',
      backgroundColorTop: '#FFC0CB',
      backgroundColorBottom: '#FFC0CB',
      fail:function(){
          console.log("setBackgroundColor fail");
      },
      success:function(){
          console.log("setBackgroundColor success");
      },
      complete:function(){
          console.log("setBackgroundColor complete");
      },
    });

  },
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date());
    this.request();
  },

  onShow() {

  },
  
  request() {
    // my.stopPullDownRefresh();
    my.showLoading();
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
        my.hideLoading();
        my.alert({content: 'success:'+JSON.stringify(res)});
      },
      fail: function(res) {
        my.hideLoading();
        my.alert({content: 'fail'+JSON.stringify(res)});
      },
      complete: function(res) {
        my.hideLoading();
        my.stopPullDownRefresh();
        my.alert({content: 'complete'+JSON.stringify(res)});
      }
    });
  },

});
