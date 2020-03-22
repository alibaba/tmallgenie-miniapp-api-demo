Page({
  data: {
    videoSrc: '',
    poster: '',
  },

  chooseVideo() {
    let that = this;

    my.chooseVideo(
      {
        sourceType: ['album', 'camera'],
        compressed: false,
        maxDuration: 180,
        success(res) {
          console.log("chooseVideo success" + JSON.stringify(res));
          // my.alert({ content: "======chooseVideo success" + JSON.stringify(res) })
          //设置video组件src
          that.setData({
            videoSrc: res.tempFilePath,
          })

        },
        fail(res) {
          console.log("chooseVideo fail" + JSON.stringify(res));
          // my.alert({ content: "chooseVideo fail" + JSON.stringify(res) })
        },
        complete(res) {
          console.log("chooseVideo complete" + JSON.stringify(res));
          // my.alert({ content: "chooseVideo complete" + JSON.stringify(res) })
        }
      }
    );
  }
})
