Page({
  data: {},
  onLoad() {},

  testPay() {
    my.call('requestPay', {
      type: 'video',
    },
    function(res) {
      my.alert({
        content: JSON.stringify(res)
      })
    })
  },

  memberPay() {
    my.call('requestPay', {
      type:"1", //会员支付，非会员支付
      product: "Audio",
      payParam: {
        "source": "qingting",
        "botId": "31683",
        "memberId": "123321",
        "title": "仅供会员购买2",
        "subTitle": "请开通会员后继续收听精彩内容2",
      }},
      function(res) {
        my.alert({
          content: JSON.stringify(res)
        })
      })
  },

  skuPay() {
     my.call('requestPay', {
      type:"0", //会员支付，非会员支付
      payParam: {
        "source": "jingbanzhongyitang",
        "title": "购买商品标题",
        "subTitle": "开始购买",
        "showRawId": "1536741744963460",
      }},
      function(res) {
        my.alert({
          content: JSON.stringify(res)
        })
      })
  },

  qrcodePay() {
    my.call('qrcodePay', {
        sellerId: '3919645743',
        content: '\{\"amount\":100,\"appId\":\"2019121169798623\",\"outItemId\":\"1000001\",\"outItemName\":\"豆腐\",\"outOrderId\":\"eebfce93-a760-415f-a6b5-4f0c9a1f3134\",\"payExpireTime\":1588908465797,\"sellerId\":3919645743}',
        sign: 'lF9t3uBB3ZOIbvoFqIibcOgXI7SS8PHfm0ZKKb1DCXhRnvfmYTQwKHisUQh9ieg3u891ANPMEsPD3haySqzyC2+MJQJNutRduUOxFHsRTXuErKmoci1XtQJwez5Wh7A6CMBDYTykIWdZorP3zwf2ZtgcddasUj9kWq9eB1VkfgE='
      },
      function(res) {
        my.alert({
          content: JSON.stringify(res)
        })
      })
  }


      // sucess:(res) => {
      //   my.alert({
      //     content: JSON.stringify(res)
      //   })
      // },
      // fail: (res) => {
      //    my.alert({
      //     content: JSON.stringify(res)
      //   })
      // }
      // })

});
