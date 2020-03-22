Page({
	data: {
		url: "",
		state: "0",
		direction: 90,
		error: "0",

		isMute: false,
		direction: 90,
	},

	onLoad() {
		this.liveplayerContext = my.createLivePlayerContext('liveplayer');
	},

	play() {
		this.liveplayerContext.play();
	},

	pause() {
		this.liveplayerContext.pause();
	},

	resume() {
		this.liveplayerContext.resume();
	},

	stop() {
		this.liveplayerContext.stop();
	},

	mute() {
		console.log("mute");
		this.data.isMute = !this.data.isMute;
		
		this.liveplayerContext.mute({
			ison: this.data.isMute,
		});
		console.log("mute finished, val=" + this.data.isMute);
	},

	fullScreen0() {
		this.liveplayerContext.requestFullScreen({
			direction: -90,
		});
		// setTimeout(() => { this.liveplayerContext.exitFullScreen() }, 3000);
	},

	fullScreen1() {
		this.liveplayerContext.requestFullScreen({
			direction: 0,
		});
		// setTimeout(() => { this.liveplayerContext.exitFullScreen() }, 3000);
	},

	fullScreen2() {
		this.liveplayerContext.requestFullScreen({
			direction: 90,
		});
		// setTimeout(() => { this.liveplayerContext.exitFullScreen() }, 3000);
	},

	onError(e) {
		console.log("onPushError, e=" + JSON.stringify(e));
		this.setData({
			error: e.detail.code,
		});
	},

	onStateChange(e) {
		console.log("onStateChange, e=" + JSON.stringify(e));
		this.setData({
			state: e.detail.code,
		});
	},

	onFullscreenChange(e) {
		console.log("arguments.length=" + arguments.length);
		console.log("onFullscreenChange, e=" + JSON.stringify(e));
		this.setData({
			direction: e.detail.direction + "-" + e.detail.fullScreen,
		});
	},

});
