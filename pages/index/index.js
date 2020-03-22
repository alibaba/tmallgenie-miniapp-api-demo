import { componentList, apiList } from '/pages/common/contant.js'

Page({
  data:{
    tabs:[{"title":"API", "data":apiList}, {"title":"组件", "data":componentList}],
    activeTab: 0,
    titleOpacity: 1
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    // my.alert({content: 'refererInfo = ' + JSON.stringify(options)});

    const app = getApp();
    console.info('app.globalData.query:'+JSON.stringify(app.options));
  },

  onLaunch(options) {
    console.info(`Page onLaunch with query: ${JSON.stringify(options)}`);
    // my.alert({content: 'refererInfo = ' + JSON.stringify(options)});
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },

  handleTabClick({ index }) {
    
    my.uma.trackEvent('handleTabChange', { 'index': index });
    console.info('handleTabClick '+index+'个')
    this.setData({
      activeTab: index,
    });
  },

  handleTabChange({ index }) {

    console.info('handleTabChange '+index+'个')
    this.setData({
      activeTab: index,
    });
  },

  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
});
