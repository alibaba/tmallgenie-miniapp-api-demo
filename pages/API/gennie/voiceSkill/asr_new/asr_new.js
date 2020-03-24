var currentPageDoneDishMenu ="";
var currentPagedoneDishCost = 0;
var app = getApp();


Page({
  data: {
    
    totalDoneDishMenu :"",
    totalDoneDishCount :0,
    debugText:"测试信息！",
    debugMode:false,
    dishes: [
      {
        id: 1,
        name: '可乐',
        tip:"好评",
        monthlySales:101,
        goodRatings:100,
        amount: 0,
        price: 8,
        image: 'http://www.cnfoodnet.com/uploadfile/2017/1012/20171012101404436.jpg',
        totalCost: 8
      },
      {
        id: 2,
        name: '薯条',
        tip:"推荐",
        monthlySales:1012,
        goodRatings:99,
        amount: 0,
        price: 6,
        image: 'http://ali.xinshipu.cn/20150204/original/1423046034690.jpg',
        totalCost: 12
      },
      {
        id: 3,
        name: '汉堡',
        tip:"人气",
        monthlySales:1052,
        goodRatings:90,
        amount: 0,
        price: 28,
        image: 'https://pic4.zhimg.com/v2-c04599f05e5f30e6fc69b3b7a66a10d7_1200x500.jpg',
        totalCost: 28
      },
      {
        id: 4,
        name: '鸡翅',
        tip:"当家",
        monthlySales:14,
        goodRatings:70,
        amount: 0,
        price: 12,
        image: 'https://p1.ssl.qhimg.com/t010ef908753f76e8b2.jpg',
        totalCost: 28
      },
      {
        id: 5,
        name: '蛋挞',
        tip:"限定",
        monthlySales:114,
        goodRatings:79,
        amount: 0,
        price: 9,
        image: 'https://p.ssl.qhimg.com/dmfd/480_225_/t01a53d50d96cc8d987.webp',
        totalCost: 28
      }
    ]
  },
  
  onLoad() {
    this.playTTSVoice("欢迎来点餐，支持可乐，薯条，汉堡，鸡翅，蛋挞。您可以说 来一份可乐");
  },

  foodCountOption(e){
    const selectedDishId = e.target.dataset.id;
    const option = e.target.dataset.option;
    const seletDishName = e.target.dataset.name;
    console.log("fun foodCountOption 点击到的菜品id："+ selectedDishId +"  操作  "+ option);
    var debugTextAlert ="点击到的菜品" + option + "   "+ seletDishName;
    this.printDebugMessage(debugTextAlert);
   
    this.dealFood(selectedDishId,option,seletDishName,0);
  },


  dishItemTap(e){
    const dishInfo = e.target.dataset.dishInfo || {};

    this.printDebugMessage("" +   JSON.stringify(e));
    this.dealFood(dishInfo.id,1,dishInfo.name,0);
  
  },
  
  dealFood: function(selectedDishId,option,selectMenuName,selectedAmount){
    
    currentPageDoneDishMenu = "";
    currentPagedoneDishCost = 0;
    var voiceDish = false;
    for(var item of this.data.dishes){
        if ((selectedDishId != 0 && item.id == selectedDishId)
            || (selectMenuName != "" && selectMenuName == item.name)
        ) {
          voiceDish = true;
          var currentCount = item.amount;
          if (option == 1) {
            if(parseInt(selectedAmount) != 0) {
              currentCount = currentCount + parseInt(selectedAmount);
            } else {
              currentCount = currentCount + 1;
            }
            
          } else if (option == -1 && currentCount >= 1) {
             if(selectedAmount != 0) {
              currentCount = currentCount - selectedAmount;
            } else {
              currentCount = currentCount - 1;
            }
          }
          if(currentCount < 0) {
            currentCount = 0;
          }

          var totalCost = item.totalCost;
          var price = item.price;
          totalCost = price * currentCount;
          item.totalCost = totalCost;
          item.amount = currentCount;
        }

        if(item.amount != 0) {
          currentPageDoneDishMenu = currentPageDoneDishMenu +" " +( item.name +" * " + item.amount );
          currentPagedoneDishCost = currentPagedoneDishCost + (item.price * item.amount);
        }
    }
    if(!voiceDish && parseInt(selectedAmount) != 0 ){
      this.playTTSVoice("对不起，当前菜单里面没有" + selectMenuName );
    }
    this.setData({
      'dishes' :this.data.dishes,
      totalDoneDishMenu:currentPageDoneDishMenu,
      totalDoneDishCount:currentPagedoneDishCost
      });
  },

  responseSimple(dish){
      this.printDebugMessage("responseSimple : " + dish);
      this.dealFood(0,1,dish,1);
       my.tg.playTTS({ text: '好的，您还需要什么吗', openMic: true });
  },

  // response(amount, dish) {
  //   my.alert({ title: 'amount:' + amount + 'dish:' + dish });
  // },

  response(amount, dish){
    console.log("语音点餐" + amount + "   "+ dish);
    
    // if (this.isCurrentNull(amount) || isNaN(amount)) {
    //   amount == 0;
    // }
    var debugTextAlert ="语音点餐" + amount + "   "+ dish;
    this.setData({
      debugText : debugTextAlert
    });
    this.dealFood(0,1,dish,amount);
    my.tg.playTTS({ text: '好的，您还需要什么吗', openMic: true });
  },
  //默认的语音指令回调
  onVoiceEvent(event) {
    console.log('onVoiceEvent:' + JSON.stringify(event));
    this.printDebugMessage('onVoiceEvent:' + JSON.stringify(event));
  },


  isCurrentNull:function (text){
     if(text === undefined) { // 只能用 === 运算来测试某个值是否是未定义的
        return true;
    }
    
    if(text == null) { // 等同于 a === undefined || a === null
         return true;
    }

    
    // String    
    if(text == "" || text == null || text == undefined){ // "",null,undefined
       return true;
    }
    if(!text){ // "",null,undefined,NaN
        return true;
    }
    if(!$.trim(text)){ // "",null,undefined
       return true;
    }

    // Array
    if(a.length == 0){ // "",[]
         return true;
    }
    if(!a.length){ // "",[]
         return true;
    }

    // Object {}
    if($.isEmptyObject(a)){ // 普通对象使用 for...in 判断，有 key 即为 false
         return true;
    }
  },

  printDebugMessage:function(text){
    var debugTextAlert =  text;
    this.setData({
      debugText : debugTextAlert
    });
  },

  playTTSVoice:function(text){
    my.tg.playTTS({
    content: ''+ text, 
    text:""+text,
    openMic: false
    });
  }

});
