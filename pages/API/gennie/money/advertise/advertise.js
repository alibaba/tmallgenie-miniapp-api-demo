Page({
  data: {},
  onLoad() {},


  showVideoAd() {
    my.call('showAdvertise', {
       type: 'video',
       wid:'11111111'//广统计标识
      },
      function(res) {
        my.alert({
          content: JSON.stringify(res)
      })
    })

    // my.reportAnalytics('show_video_ad_click', {wid:'11111111'});
  },

  showBannerAd3() {

    my.call('showAdvertise', {
      type: 'banner', 
      position:'bottom',
      backgroundColor:'black',
      style:'three',
      wid:'11111111'//广统计标识
    })
  },

  showBannerAdBig() {
    my.call('showAdvertise', {
      type: 'banner',
      position:'top',
      backgroundColor:'black',
      style:'big',
      frequency:'long',
      wid:'11111111'//广统计标识
    },
    function(res) {
      my.alert({
        content: JSON.stringify(res)
      })
    })
  },

  showBannerAdSmall() {
    my.call('showAdvertise', {
      type: 'banner',
      position:'bottom',
      backgroundColor:'black',
      style:'small',
      wid:'11111111'//广统计标识
    },
      function(result) {
        my.alert({
          content: JSON.stringify(result)
        })
      });
  },

  closeVideoAd() {
    setTimeout(() => { my.call('closeAdvertise', {type: 'video'}) }, 10000);
  },

  closeBannerAd() {
    my.call('closeAdvertise', {
      type: 'banner',
    });

    // my.tg.closeAdvertise({
    //    type: 'banner'
    // });
  }

});
