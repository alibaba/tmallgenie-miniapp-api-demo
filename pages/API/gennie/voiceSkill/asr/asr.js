var dishAllCost = 0;
var dishAllMenu = "";
var currentBottomMenuShow = false;


Page({
  data: {
    dishCount: 0,
    dishMenu: "当前购物车是空的",
    bottomMenuShow: false,

    doneDishes: [
      {
        id: 1,
        name: "可乐",
        amount: 0,
        price: 8,
        totalCost: 0
      },
      {
        id: 2,
        name: "薯条",
        amount: 0,
        price: 6,
        totalCost: 0
      },
      {
        id: 3,
        name: "汉堡",
        amount: 0,
        price: 28,
        totalCost: 0
      }
    ]
    ,

    dishes: [
      {
        id: 1,
        name: '可乐',
        amount: 1,
        price: 8,
        image: 'http://www.cnfoodnet.com/uploadfile/2017/1012/20171012101404436.jpg',
        totalCost: 8
      },
      {
        id: 2,
        name: '薯条',
        amount: 2,
        price: 6,
        image: 'http://ali.xinshipu.cn/20150204/original/1423046034690.jpg',
        totalCost: 12
      },
      {
        id: 3,
        name: '汉堡',
        amount: 1,
        price: 28,
        image: 'https://pic4.zhimg.com/v2-c04599f05e5f30e6fc69b3b7a66a10d7_1200x500.jpg',
        totalCost: 28
      }

    ]

  },



  handlebottomView(e) {
    console.log("底部菜单被点击了");
    if (!currentBottomMenuShow) {
      this.setData({ bottomMenuShow: true });
    } else {
      this.setData({ bottomMenuShow: false });
    }
    currentBottomMenuShow = !currentBottomMenuShow;
  },




  handleDish(e) {
    const dishInfo = e.target.dataset.dishInfo || {};
    console.info("CLICK" + dishInfo.name);
    dishAllCost = dishAllCost + dishInfo.price;
    dishAllMenu = dishAllMenu + dishInfo.name + ";";
    this.setData({ dishMenu: dishAllMenu });
    this.setData({ dishCount: dishAllCost });
    var valueAble = false;
    console.log("dishInfo"+dishInfo.id);
    for (var item of this.data.dishes) {
      console.log("item"+item.id);
      if( item.id == dishInfo.id){
        valueAble = true;
        break;
      } else {
        continue;
      }
    }
    if(!valueAble){
      console.log("当前点击不合法");
      return;
    } else {
       console.log("当前点击合法");
    }
    for (var itemDone of this.data.doneDishes){
      if(itemDone.id == dishInfo.id) {
        var count = itemDone.amount;
        var price = itemDone.price;
        count = count + 1;
        var totalCast = price * count;
        
        itemDone.amount = count;
        itemDone.totalCost = totalCast;
        // var SS= "itemDone.amount";
        // this.setData({SS :count});
        //  this.data.itemDone.amount = count;
        console.log("this.setData.itemDone.amount"+itemDone.amount +"   "+count);
     
      }
    }
    this.setData({
      'doneDishes':    this.data.doneDishes
 });



  },
  handleDishOption(e){
      console.log("点餐详情列表点击 ： " +e.target.dataset.id+ " --   "+ e.target.dataset.option);
      const dishId = e.target.dataset.id;
      const dishOption =  e.target.dataset.option;
      dishAllCost = 0;
      dishAllMenu = "";
      for (var itemDone of this.data.doneDishes){
        if(itemDone.id == dishId) {
          var count = itemDone.amount;
          var price = itemDone.price;
          if (dishOption == 1) {
            count = count + 1;
          } else if(dishOption == -1){
            count = count -1;
          }
          var totalCast = price * count;
          itemDone.amount = count;
          itemDone.totalCost = totalCast;
        }

        if(itemDone.amount != 0) {
          dishAllCost = dishAllCost + (itemDone.price * itemDone.amount);
          dishAllMenu = dishAllMenu + ""+ itemDone.name +" * " + itemDone.amount +";";
        }
      }

      this.setData({
        'doneDishes':    this.data.doneDishes,
        dishCount: dishAllCost,
        dishMenu : dishAllMenu,
      });

  },

  

  menus: {
    '可乐': {
      price: 8,
      image: 'http://www.cnfoodnet.com/uploadfile/2017/1012/20171012101404436.jpg'
    },
    '汉堡': {
      price: 28,
      image: 'https://pic4.zhimg.com/v2-c04599f05e5f30e6fc69b3b7a66a10d7_1200x500.jpg'
    },
    '薯条': {
      price: 10,
      image: 'http://ali.xinshipu.cn/20150204/original/1423046034690.jpg'
    }
  },

  onLoad() {
    console.info("hello");
    my.tg.playTTS({ text: '欢迎来点餐，支持可乐，薯条，汉堡。您可以说 来一份可乐 ' });

  },

  helloAsr() {
    my.tg.playTTS({ text: '你好主人，欢迎开发语音小程序。您可以查看开发者文档探索更多我所具备的能力哦。' })
  },

  response(amount, dish) {
    my.alert({ title: 'amount:' + amount + 'dish:' + dish });
    console.log('clock');
    const item = this.menus[dish];
    if (!item) {
      my.tg.playTTS({ text: '现在不提供${dish}呢' });
      return;
    }

    const { price, image } = item;
    this.setData({
      dishes: [...this.data.dishes, {
        name: dish,
        amount,
        price,
        image,
        totalCost: price * amount
      }]
    });

    my.tg.playTTS({ text: '好的，您还需要什么吗', openMic: true })
  },

  onVoiceEvent(event) {
    console.log('onVoiceEvent:' + JSON.stringify(event));
  },

});
