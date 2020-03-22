Page({
  data: {
    title: 'initail',
    seek: 50
  },

  onLoad() {
    this.backgroundAudioManager = my.getBackgroundAudioManager();
    this.backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=444312.mp3';//'http://music.163.com/song/media/outer/url?id=443242.mp3';
    this.backgroundAudioManager.onPlay(() => {
      this.setData({ title: 'onPlay' })
      console.log('onPlay')
    })
    this.backgroundAudioManager.onPause(() => {
      this.setData({ title: 'onPause' })
      console.log('onPause')
    })
    this.backgroundAudioManager.onCanplay(() => {
      this.setData({ title: 'onCanplay' })
      console.log('onCanplay')
    })
    this.backgroundAudioManager.onStop(() => {
      this.setData({ title: 'onStop' })
      console.log('onStop')
    })
    this.backgroundAudioManager.onEnded(() => {
      this.setData({ title: 'onEnded' })
      console.log('onEnded')
    })
    this.backgroundAudioManager.onTimeUpdate(() => {
      console.log("onTimeUpdate")
      /*my.alert({
        content:'背景音频播放进度更新事件'
      });*/
    })
    this.backgroundAudioManager.onPrev(() => {
      this.setData({ title: 'onPrev' })
      console.log('onPrev')
    })
    this.backgroundAudioManager.onNext(() => {
      this.setData({ title: 'onNext' })
      console.log('onNext')
    })
    this.backgroundAudioManager.onError(() => {
      this.setData({ title: 'onError' })
      console.log('onError')
    })
    this.backgroundAudioManager.onWaiting(() => {
      this.setData({ title: 'onWaiting' })
      console.log('onWaiting')
    })
  },

  audioPlay() {
    console.log("call play");
    this.backgroundAudioManager.play();
    console.log("call play end");
  },
  audioPause() {
    console.log("call pause");
    this.backgroundAudioManager.pause()
  },
  audioStop() {
    console.log("call stop")
    this.backgroundAudioManager.stop()
  },
  audioSeek() {
    console.log("call seek 14")
    this.backgroundAudioManager.seek(14)
  },

  getAllProps() {
    let result = {
      duration: this.backgroundAudioManager.duration,
      currentTime: this.backgroundAudioManager.currentTime,
      paused: this.backgroundAudioManager.paused,
      startTime: this.backgroundAudioManager.startTime,
      buffered: this.backgroundAudioManager.buffered,
      src: this.backgroundAudioManager.src,
    }
    my.alert({ content: JSON.stringify(result) });
  }
})
