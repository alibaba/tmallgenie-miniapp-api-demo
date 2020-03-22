const options = {
  duration: 5000,//600000
  sampleRate: 24000, //cclite:16000, cc:22050 24000 32000 44100 48000
  numberOfChannels: 2,
  encodeBitRate: 64000, //192000,
  format: "aac",
  // frameSize: 2048,
  audioSource: "mic", //"auto"
  // hideTips: true  //是否有录音提示
}

Page({
  data: {
    recordTimeArr: ['1', '10', '3', '0', '-1', '11'],
    recordTimeIndex: 0,
    recordTimeCount: '1',
    recordTime: 60000,

    sampleRateArr: ['8000', '11025', '12000', '16000', '22050', '24000', '32000', '44100', '48000'],
    sampleRateIndex: 0,
    sampleRateCount: '8000',


    encodeBitRateArr: ['12345', '19200', '24000', '48000', '64000', '96000', '192000', '320000', '332000'],
    encodeBitRateIndex: 0,
    encodeBitRateCount: '19200',

    numberOfChannelsArr: ['1', '2', '3'],
    numberOfChannelsIndex: 0,
    numberOfChannels: 1,

    audioSourcesArr: ['auto', 'mic', "camcorder", "voice_communication", "voice_recognition", "auto33333"],
    audioSourcesIndex: 1,
    audioSource: "auto"
  },

  onReady() {
    this.recorderManager = my.getRecorderManager();
    this.innerAudioContext = my.createInnerAudioContext();

    this.recorderManager.onPause(() => {
      console.log('recorder onPause');
    });

    this.recorderManager.onResume(() => {
      console.log('recorder onResume');
    });

    this.recorderManager.onStop((res) => {
      console.log('recorder onStop', JSON.stringify(res));
      this.innerAudioContext.src = res['tempFilePath'];
    });

    this.recorderManager.onStart(() => {
      console.log('recorder onStart');
    });

    this.recorderManager.onError((res) => {
      console.log('onError' + JSON.stringify(res));
    });
  },

  chooseAudioSource(e) {
    const index = e.detail.value;
    const { audioSourcesArr } = this.data;
    options['audioSource'] = audioSourcesArr[index];
    this.setData({ audioSurce: audioSourcesArr[index] });
  },

  chooseRecordTime(e) {
    const index = e.detail.value
    const { recordTimeArr } = this.data;
    options['duration'] = parseInt(recordTimeArr[index]) * 60 * 1000;
    this.setData({
      recordTimeCount: recordTimeArr[index]
    })
  },

  chooseSampleRate(e) {
    const index = e.detail.value
    const { sampleRateArr } = this.data;
    options['sampleRate'] = parseInt(sampleRateArr[index]);
    this.setData({
      sampleRateCount: sampleRateArr[index]
    })
  },

  chooseeEncodeBitRate(e) {
    const index = e.detail.value
    const { encodeBitRateArr } = this.data;
    options['encodeBitRate'] = parseInt(encodeBitRateArr[index]);
    this.setData({
      encodeBitRateCount: encodeBitRateArr[index]
    })
  },

  chooseeNumberOfChannels(e) {
    const index = e.detail.value
    const { numberOfChannelsArr } = this.data;
    options['numberOfChannels'] = parseInt(numberOfChannelsArr[index]);
    this.setData({
      numberOfChannels: numberOfChannelsArr[index]
    })
  },

  //事件处理函数
  startRecording() {
     my.call('getGenieDeviceInfo', this.startRecord.bind(this));
  },

  startRecord(result) {
    if(result && result.data && result.data.deviceType ==='S1L') {
        options['sampleRate'] =  16000; //ccl 目前只支持 16000，新春版，会支持48K，16K，1channe/2channel录音
    }
    this.recorderManager.start(options);
  },

  stopRecording() {
    this.recorderManager.stop();
  },

  pauseRecording() {
    console.log('recorder pauseRecording');
    this.recorderManager.pause();
  },

  resumeRecording() {
    console.log('recorder resumeRecording');
    this.recorderManager.resume();
  },

  playAudio() {
    this.innerAudioContext.play();
  },

  stopAudio() {
    this.innerAudioContext.stop();
  }
})