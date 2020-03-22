
import {formatLocation} from '/pages/common/util.js'

Page({
  data: {},
  onLoad() {},

  getLocation() {
    my.request({
  url: 'https://gw.alipayobjects.com/mdn/miniapp_de/afts/img/A*G1kWSJbe2zEAAAAAAAAAAABjARQnAQ',
  method: 'GET',
  dataType: 'base64',
  success: (resp) => {
    console.log('resp data length', resp.data.length);
    console.log('resp data', resp.data); // 返回格式类似于：data:image/png;base64,iVBORw0KG...
  },
  fail: (err) => {
    console.log('error', err);
  },
});
  },
});
