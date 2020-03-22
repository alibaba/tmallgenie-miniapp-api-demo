Page({
  data: {},
  onLoad() {},

  playMusic() {

    my.call('playMusic', {
      audioParam:[
        {
          audioUrl:'http://music.163.com/song/media/outer/url?id=443242.mp3',
          audioAnchor: '久石让',
          audioName:'summer',
          audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
        },
        {
          audioUrl:'http://music.163.com/song/media/outer/url?id=443242.mp3',
          audioAnchor: '久石让2',
          audioName:'summer2',
          audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
        }
      ]})

    //  my.call('playAudio', {
    //   audioParam: {
    //     itemId:'16233629',
    //     source:'ximalayav2',
    //     itemValue: '安徒生的童话故事',
    //     type:'ALBUM',
    //     itemType: 'program',
    //     pos:'0',
    //   }})
    }

});
