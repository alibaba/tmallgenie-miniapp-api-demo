Page({
  getAvailableAudioSources() {
    my.getAvailableAudioSources(
      {
        success: function(res) {
          my.alert({ content: "success" + JSON.stringify(res) });
          console.log("getAvailableAudioSources success" + JSON.stringify(res));
        },
        fail: function(res) {
          // my.alert({ content: "fail" });
          if (res) {
            console.log("getAvailableAudioSources fail" + JSON.stringify(res));
          }
        },
        complete: function(res) {
          // my.alert({ content: "complete" });
          if (res) {
            console.log("getAvailableAudioSources complete" + JSON.stringnify(res));
          }
        },

      }
    )
  }
})
