Page({
  data: {},
  onLoad() {},

  playTTS() {
    my.tg.playTTS({
      content: '请问你要选第几个', 
      openMic: true
    });
  }

});
