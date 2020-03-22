Page({
  data: {
    videoSrc: 'https://gw.alipayobjects.com/mdn/rms_304239/afts/file/A*jZNCRrk9bNAAAAAAAAAAAABkARQnAQ'//"https://media.w3.org/2010/05/sintel/trailer.mp4"//'http://ali-topic-video.ai160.com/vs2m/003/00302002/00302002031/00302002031.m3u8'
  },

  saveVideoToPhotosAlbum() {
    let that = this;
    my.saveVideoToPhotosAlbum(
      {
        src: that.data.videoSrc,
        success: function(res) {
          console.log("saveVideoToPhotosAlbum success" + JSON.stringify(res));
          my.alert({ content: "saveVideoToPhotosAlbum success" + JSON.stringify(res) })
        },
        fail: function(res) {
          console.log("saveVideoToPhotosAlbum fail" + JSON.stringify(res));
          my.alert({ content: "saveVideoToPhotosAlbum fail" + JSON.stringify(res) })
        },
        complete: function(res) {
          console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
          // my.alert({ content: "saveVideoToPhotosAlbum complete" + JSON.stringify(res) })
        }
      }
    );
  }
})
