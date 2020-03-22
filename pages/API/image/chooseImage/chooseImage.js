Page({
  data: {
    url: ''
  },

  chooseImage() {
    my.chooseImage({
      sourceType: ['camera', 'album'],
      count: 1,
      sizeType: ['original', 'compressed'],
      success: (res) => {
        this.setData({
          url: res.apFilePaths[0],
        })
        my.alert({
          content: JSON.stringify(res),

        });
      },
      fail: () => {
        my.showToast({
          content: 'fail', // 文字内容
        });
      }
    })
  }
});