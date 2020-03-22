Page({
    data: {
        title: 'initail',
        seek: 50
    },
    onLoad() {
        this.innerAudioContext = my.createInnerAudioContext();
        this.innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=443242.mp3';
        this.innerAudioContext.autoplay = false;
        this.innerAudioContext.loop = false;
        this.innerAudioContext.mixAudioWithOthers = false;
        this.innerAudioContext.onCanplay(() => {
            this.setData({ title: 'onCanplay' })
            console.log('onCanplay')
        });

        this.innerAudioContext.onPlay(() => {
            this.setData({ title: 'onPlay' })
            console.log('onPlay')
        });

        this.innerAudioContext.onPause(() => {
            this.setData({ title: 'onPause' })
            console.log('onPause')
        });

        this.innerAudioContext.onEnded(() => {
            this.setData({ title: 'onEnded' })
            console.log('onEnded')
        });

        this.innerAudioContext.onTimeUpdate(() => {
            console.log('onTimeUpdate')
        });

        this.innerAudioContext.onError(() => {
            this.setData({ title: 'onError' })
            console.log('onError')
        });

        this.innerAudioContext.onStop(() => {
            this.setData({ title: 'onStop' })
            console.log('onStop')
        });

        this.innerAudioContext.onWaiting(() => {
            this.setData({ title: 'onWaiting' })
            console.log('onWaiting')
        });

        this.innerAudioContext.onSeeking(() => {
            this.setData({ title: 'onSeeking' })
            console.log('onSeeking')
        });

        this.innerAudioContext.onSeeked(() => {
            this.setData({ title: 'onSeeked' })
            console.log('onSeeked')
        });
    },

    play() {
        console.log("call play");
        this.innerAudioContext.play();
        console.log("finish call play");
        //my.alert({ content: '开始播放：' + JSON.stringify(res) });
    },

    pause() {
        console.log("call pause");
        this.innerAudioContext.pause()
        console.log("finish call pause");
    },
    stop() {
        console.log("call stop");
        this.innerAudioContext.stop();
        console.log("finish call stop");
    },
    seek() {
        console.log("call seek");
        const seekVal = this.data.seek;
        console.log("seek to: " + seekVal)
        this.innerAudioContext.seek(seekVal);
        console.log("finish call seek");
    },
    destroy() {
        console.log("call destroy");
        this.innerAudioContext.destroy();
        console.log("finish call destroy");

    },

    onCanplay() {
        this.innerAudioContext.onCanplay(() => {
            this.setData({ title: 'onCanplay' })
            console.log('onCanplay')
        });
    },

    getAllProps() {
        var src = this.innerAudioContext.src;
        var startTime = this.innerAudioContext.startTime;
        var autoplay = this.innerAudioContext.autoplay;
        var loop = this.innerAudioContext.loop;
        var obeyMuteSwitch = this.innerAudioContext.obeyMuteSwitch;
        var duration = this.innerAudioContext.duration;
        var currentTime = this.innerAudioContext.currentTime;
        var paused = this.innerAudioContext.paused;
        var buffered = this.innerAudioContext.buffered;
        var volume = this.innerAudioContext.volume;
        var result = "src: " + src + "\n" +
            "startTime: " + startTime + "\n" +
            "autoplay: " + autoplay + "\n" +
            "loop: " + loop + "\n" +
            "obeyMuteSwitch: " + obeyMuteSwitch + "\n" +
            "duration: " + duration + "\n" +
            "currentTime: " + currentTime + "\n" +
            "paused: " + paused + "\n" +
            "buffered: " + buffered + "\n" +
            "volume: " + volume + "\n";
        my.alert({ content: '音频属性：' + result });
        console.log(result);
    },
});
