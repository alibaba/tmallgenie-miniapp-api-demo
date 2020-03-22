Page({
  data: {
    originSrc: '',
    compressedSrc: '',
  },
  selectImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          originSrc: res.apFilePaths[0]
        });
        my.compressImage({
          apFilePaths: res.apFilePaths,
          level: 0,
          success: data => {
            console.log(data);
            this.setData({
              compressedSrc: data.apFilePaths[0],
            })
          }
        })
      }
    })
  },
});