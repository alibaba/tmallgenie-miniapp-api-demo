Page({
  data: {},
  onLoad() {},

  onShow() {
    my.call('useSystemSkill', {
      skillName: 'chat'
    })
  },
  
  //默认的语音指令回调
  onVoiceEvent(event){
    my.alert({content: "onVoiceEvent = " + JSON.stringify(event)}); 
  },

});
