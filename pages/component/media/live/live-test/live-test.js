Page({
	data: {
		state: "0",
		netstatus: "0",
		error: "0",
	},
	onLoad(query) {
		console.log("onLoad, extra=" + query.extra);
		this.pushContext = my.createLivePusherContext('livepusher');
		this.data.livepush = JSON.parse(query.extra);
		console.log("onLoad, livepush=" + this.data.livepush);
	},

	start() {
		this.pushContext.start();
	},

	pause() {
		this.pushContext.pause();
	},

	resume() {
		this.pushContext.resume();
	},

	stop() {
		this.pushContext.stop();
	},

	switchCamera() {
		this.pushContext.switchCamera();
	},

	toggleTorch() {
		this.pushContext.toggleTorch();
	},

	playerplay() {
		this.playerContext.play();
	},

	playerpause() {
		this.playerContext.pause();
	},

	onPushError(e) {
		console.log("onPushError, e=" + JSON.stringify(e));
		this.setData({
			error: e.detail.error,
		});
	},

	onStateChange(e) {
		console.log("onStateChange, state=" + e.detail.code);
		this.setData({
			state: e.detail.code,
		});
	},

	onNetStatus(e) {
		console.log("onNetStatus, e=" + JSON.stringify(e));
		console.log("onNetStatus, status=" + e.detail.info.status);

		this.setData({
			netstatus: e.detail.info.status,
		});
	},
});
