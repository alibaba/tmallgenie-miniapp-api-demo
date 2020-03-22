Page({
	data: {
		livepush: {
			url: "",
			mode: "HD",
			autopush: true,
			muted: false,
			orientation: "vertical",
			beauty: 30,
			device_pos: "back",
		},

		mode_items: [
			{ name: 'SD', value: 'SD'},
			{ name: 'HD', value: 'HD', checked: true },
			{ name: 'FHD', value: 'FHD'},
		],

		ori_items: [
			{ name: 'vertical', value: 'vertical' , checked: true },
			{ name: 'horizontal', value: 'horizontal', checked: false },
		],

		device_pos_items: [
			{ name: 'back', value: 'back', checked: true },
			{ name: 'front', value: 'front', checked: false },
		],
	},
	onLoad() {},

	urlChanged(e) {
		this.data.livepush.url = e.detail.value;
	},

	autoPush(e) {
		this.data.livepush.autopush = e.detail.value;
	},

	mutePush(e) {
		this.data.livepush.muted = e.detail.value;
	},

	modeChange(e) {
		this.data.livepush.mode = e.detail.value;
	},

	oriChange(e) {
		this.data.livepush.orientation = e.detail.value;
	},

	devPosChange(e) {
		this.data.livepush.device_pos = e.detail.value;
	},

	beautyChanged(e) {
		this.data.livepush.beauty = e.detail.value;
	},

	gotoDetail() {
		var extra = JSON.stringify(this.data.livepush);
		console.log("gotoDetail, extra=" + extra);
		my.navigateTo({ url: '/pages/component/live/live-test/live-test?extra=' + extra });
		console.log("gotoDetail end");
	},
});
