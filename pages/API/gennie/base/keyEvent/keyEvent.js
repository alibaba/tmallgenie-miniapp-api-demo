Page({
  data: {},
  onLoad() {},

  sendBackKeyEvent() {
    my.call("sendKeyEvent", {"keyCode": "BACK"})
  },

  sendHomeKeyEvent() {
    my.call("sendKeyEvent", {"keyCode": "HOME"})
  }
    
});
