Page({
	data: {
		video: {
			src:  'https://gw.alipayobjects.com/mdn/rms_304239/afts/file/A*jZNCRrk9bNAAAAAAAAAAAABkARQnAQ', // "XMzc2ODAwNjcxMg==",//"http://ali-topic-video.ai160.com/vs2m/003/00302002/00302002031/00302002031.m3u8",//
			showAllControls: false,
			showPlayButton: false,
			showCenterButton: true,
			showFullScreenButton: true,
			isLooping: false,
			muteWhenPlaying: false,
			initTime: 0,
			objectFit: "contain",
			autoPlay: false,
			directionWhenFullScreen: 90,
			mobilenetHintType: 2,
			extraInfo: {
				definition: 3,
			},
		},
		objfit_items: [
			{name: 'contain', value: 'contain', checked: true},
			{name: 'fill', value: 'fill'},
		],
		definition_items: [
			{name: 0, value: '自动', checked: true},
			{name: 1, value: '省流'},
			{name: 2, value: '标清'},
			{name: 3, value: '高清'},
			{name: 4, value: '超清'},
			{name: 5, value: '蓝光'},
		],
	},

 	onLoad() {},

	srcChanged(e) {
		this.data.video.src = e.detail.value;
	},

	posterChanged(e) {
		this.data.video.src = e.detail.value;
	},

	showAllControls(e) {
		this.data.video.showAllControls = e.detail.value;
	},

	showPlayButton(e) {
		this.data.video.showPlayButton = e.detail.value;
	},

	showCenterButton(e) {
		this.data.video.showCenterButton = e.detail.value;
	},

	showFullScreenButton(e) {
		this.data.video.showFullScreenButton = e.detail.value;
	},

	isLooping(e) {
		this.data.video.isLooping = e.detail.value;
	},

	isMuteWhenPlaying(e) {
		this.data.video.muteWhenPlaying = e.detail.value;
	},

	startTimeChanged(e) {
		this.data.video.initTime = e.detail.value;
	},

	hintTypeChanged(e) {
		this.data.video.mobilenetHintType = e.detail.value;
	},

	autoPlay(e) {
		this.data.video.autoPlay = e.detail.value;
	},

	radioChange(e) {
		this.data.video.objectFit = e.detail.value;
	},

	definitionChange(e) {
		this.data.video.extraInfo.definition = e.detail.value;
	},

	gotoDetail() {
		var extra = JSON.stringify(this.data.video);
		console.log("gotoDetail, extra=" + extra);
		my.navigateTo({url: '/pages/component/media/video/video-test/video-test?extra=' + extra});
		console.log("gotoDetail end");
  	},
});
