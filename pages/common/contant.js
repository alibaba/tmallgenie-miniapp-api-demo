export default {


   apiList : [
     {
      type: '基础',
      list: [
        {
          name: '播放TTS',
          nameEn: 'playTTS',
          path: '/pages/API/gennie/base/playTTS/playTTS',
        },
        {
          name: '展示或隐藏导航栏',
          nameEn: 'navigationBar',
          path: '/pages/API/gennie/base/navigationBar/navigationBar',
        },
        {
          name: '模拟物理按键',
          nameEn: 'sendKeyEvent',
          path: '/pages/API/gennie/base/keyEvent/keyEvent',
        },
        {
          name: '获取地址信息',
          nameEn: 'locationInfo',
          path: '/pages/API/gennie/base/location/location',
        },
        {
          name: '获取账号信息',
          nameEn: 'userInfo',
          path: '/pages/API/gennie/base/userInfo/userInfo',
        }, 
        {
          name: '网络请求',
          nameEn: 'request',
          path: '/pages/API/gennie/base/request/request',
        }

      ],
    },
     {
      type: '语音技能',
      list: [
        {
          name: '基础ASR-点餐示例',
          nameEn: 'asr',
          path: '/pages/API/gennie/voiceSkill/asr_new/asr_new',
        },
        {
          name: '沉浸式对话模式',
          nameEn: 'immersionChat',
          path: '/pages/API/gennie/voiceSkill/immersionChat/immersionChat',
        }
      ],
    },    
    {
      type: '图片',
      list: [
          {
            name: '选择图片',
            nameEn: 'chooseImage',
            path: '/pages/API/image/chooseImage/chooseImage',
          },
          {
            name: '预览图片',
            nameEn: 'previewImage',
            path: '/pages/API/image/previewImage/previewImage',
          },
          {
            name: '保存图片',
            nameEn: 'saveImage',
            path: '/pages/API/image/saveImage/saveImage',
          },
          {
            name: '压缩图片',
            nameEn: 'compressImage',
            path: '/pages/API/image/compressImage/compressImage',
          },
          {
            name: '获取图片信息',
            nameEn: 'getImageInfo',
            path: '/pages/API/image/getImageInfo/getImageInfo',
          }
        ],
    },
    {
      type: '音频',
      list: [
        {
          name: '前景音频',
          nameEn: 'innerAudio',
          path: '/pages/API/audio/innerAudio/innerAudio',
        },
        // {
        //   name: '背景音频',
        //   nameEn: 'backgroundAudio',
        //   path: '/pages/API/audio/backgroundAudio/backgroundAudio',
        // },
        {
          name: '音乐播放器',
          nameEn: 'playMusic',
          path: '/pages/API/audio/playMusic/playMusic',
        },
        {
          name: '录音管理',
          nameEn: 'recorderManager',
          path: '/pages/API/audio/recorder/recorder',
        },
        {
          name: '获取支持的音频输入源',
          nameEn: 'availableAudioSources',
          path: '/pages/API/audio/availableAudioSource/availableAudioSource',
        }
      ],
    },
    {
      type: '商业化',
      list: [
        {
          name: '广告',
          nameEn: 'advertise',
          path: '/pages/API/gennie/money/advertise/advertise',
        },
   
        {
          name: '支付',
          nameEn: 'pay',
          path: '/pages/API/gennie/money/pay/pay',
        }
      ],
    },
    // {
    //   type: '视频',
    //   list: VideoList,
    // }
  ],
  componentList : [
    {
      type: '媒体',
      list: [
        {
          name: '图片',
          thumb: '/image/icon/image.png',
          nameEn: 'Image',
          path: '/pages/component/media/image/image',
        },
        {
          name: '视频',
          thumb: '/image/icon/view.png',
          nameEn: 'Video',
          path: '/pages/component/media/video/video-setting/video-setting',
        }
      ],
      // {
      //   type: '相机',
      //   list: basicCamera,
      // },
      // {
      //   type: '直播',
      //   list: basicLive,
      // },
      // {
      //   type: '智能',
      //   list: basicAI,
      // },
    },
    {
      type: '开放组件',
      list: [
        {
          name: '内嵌webview',
          thumb: '/image/icon/webview.png',
          nameEn: 'WebView',
          path: '/pages/component/open/webView/webView',
        }
      ]
    }
  ]
}