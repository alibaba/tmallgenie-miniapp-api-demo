Page({
  data: {},
  onLoad() {},

  playMusic() {

    // let audioParam = [];
    // for (let i =0; i<100; i++) {
    //   let param = {
    //       audioUrl:'http://music.163.com/song/media/outer/url?id=443242.mp3',
    //       audioAnchor: '久石让',
    //       audioName:'summer',
    //       audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
    //     }
    //   audioParam.push(param)
    // }
    //my.call('playMusic', {audioParam});

    my.call('playMusic', {
      audioParam:[
        {
          audioUrl:'http://music.163.com/song/media/outer/url?id=443242.mp3',
          audioAnchor: '久石让',
          audioName:'summer',
          audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
        },
        {
          audioUrl:'http://music.163.com/song/media/outer/url?id=444312.mp3',
          audioAnchor: '久石让2',
          audioName:'rain',
          audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
        },
        {
          audioUrl:'http://music.163.com/song/media/outer/url?id=443242.mp3',
          audioAnchor: '久石让3',
          audioName:'summer2',
          audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
        },
        {
          audioUrl:'http://music.163.com/song/media/outer/url?id=444312.mp3',
          audioAnchor: '久石让4',
          audioName:'rain2',
          audioImageUrl: 'http://p1.music.126.net/ywjgj1eqbM6NWtBd3RpHPw==/109951164630584808.jpg?param=130y130'
        }
      ]})
    }

});
