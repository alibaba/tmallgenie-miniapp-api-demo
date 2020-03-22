Page({
	data: {
		status: "inited",
		time: "0",

		isMute: false,
		speed:  1.0,
		extraInfo: {
			"definition": 3,
		},
	},
	onLoad(query) {
		console.log("onLoad, extra=" + query.extra);
		this.videoContext = my.createVideoContext('myVideo');
		this.data.video = JSON.parse(query.extra);
	},

	play() {
		this.videoContext.play();
		this.videoContext.playbackRate(this.data.speed);
	},

	pause() {
		this.videoContext.pause();
	},

	seek() {
		this.videoContext.seek(15);
	},

	stop() {
		this.videoContext.stop();
	},

	mute() {
		console.log("mute");
		var temp = this.data.isMute;
		this.data.isMute = !temp;
		this.videoContext.mute(this.data.isMute);
		console.log("mute finished, val=" + this.data.isMute);
	},

	fullScreen0() {
		this.videoContext.requestFullScreen({
			direction: -90,
		});
	},

	fullScreen1() {
		this.videoContext.requestFullScreen({
			direction: 0,
		});
	},

	fullScreen2() {
		this.videoContext.requestFullScreen({
			direction: 90,
		});
	},
	
	onPlay(e) {
		console.log('onPlay');
		this.setData({
			status: "playing"
		})
	},

	onPause(e) {
		console.log('onPause');
		this.setData({
		status: "paused"
		})
	},

	onEnded(e) {
		console.log('onEnded');
		this.setData({
		status: "ended"
		})
	},

	onPlayError(e) {
		console.log('onPlayError, e=' + JSON.stringify(e));
		my.alert({
			title: 'player error, errMsg=' + e.detail.errMsg, 
		});
	},

	onTimeUpdate(e) {
		console.log('onTimeUpdate:', e.detail.currentTime);
		this.setData({
			time: e.detail.currentTime,
		})
	},

	sliderChange(e) {
		this.data.speed = e.detail.value;
		this.videoContext.playbackRate(e.detail.value);
	}
});
