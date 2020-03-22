Page({
  data: {
    dishes: [
      {
        name: '可乐（默认）',
        amount: 1,
        price: 8,
        image: 'http://www.cnfoodnet.com/uploadfile/2017/1012/20171012101404436.jpg',
        totalCost: 8
      }
    ]
  },

  menus:{
    '可乐':{
      price: 8,
      image:'http://www.cnfoodnet.com/uploadfile/2017/1012/20171012101404436.jpg'
    },
    '汉堡':{
      price: 28,
      image:'https://pic4.zhimg.com/v2-c04599f05e5f30e6fc69b3b7a66a10d7_1200x500.jpg'
    },
    '薯条':{
      price: 10,
      image:'http://ali.xinshipu.cn/20150204/original/1423046034690.jpg'
    }
  },

  onLoad() {
    my.tg.playTTS({text: '欢迎来点餐，支持可乐，薯条，汉堡。您可以说 来一份可乐 '});
  },

  helloAsr() {
    my.tg.playTTS({ text: '你好主人，欢迎开发语音小程序。您可以查看开发者文档探索更多我所具备的能力哦。' })
  },

  response(amount, dish) {
    // my.alert({title: 'amount:'+amount+'dish:'+dish});
    const item = this.menus[dish];
    if (!item) {
      my.tg.playTTS({text: '现在不提供${dish}呢'});
      return;
    }

    const {price, image} = item;
    this.setData({
      dishes: [...this.data.dishes, {
        name: dish,
        amount,
        price,
        image,
        totalCost: price*amount
      }]
    });

    my.tg.playTTS({text: '好的，您还需要什么吗', openMic: true})
  },

  onVoiceEvent(event){
    console.log('onVoiceEvent:' + JSON.stringify(event));
  },

});
