import uma from 'umtrack-alipay';

App({

  //友盟自定义集成埋点文档 https://developer.umeng.com/docs/147615/detail/147727
  umengConfig: {
    //加由友盟分配的APP_KEY
    debug: true //是否打开调试模式
  },

  gloabalData:{
    options:{},
    //uma 请将uma模块绑定在gloabalData下，以便后续使用
  },
  
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch'+JSON.stringify(options));

    this.gloabalData.options = options;
    //解析⼩程序启动参数
    // my.alert({
    //   content: 'App onLaunch'+JSON.stringify(options)
    // })
    my.tg.onMoveToFront(function (event) {
      this.gloabalData.options = event;
      console.info('onMoveToFront.event ='+JSON.stringify(event));
      // my.alert({content: 'onMoveToFront.event = ' + JSON.stringify(event)}); //解析event参数，并处理理
    })

  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
