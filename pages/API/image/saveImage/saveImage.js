Page({
  data: {
    url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg'
  },
  saveImage() {
    my.saveImage({
      url: this.data.url,
      success: () => {
        my.alert({
          title: '保存成功',
        });
      },
    });
  }
});
