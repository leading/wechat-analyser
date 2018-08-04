import TextMessage from './text-message';
import SystemMessage from './system-message';
import ImageMessage from './image-message';
/**
 * 微信消息——根据不同类型，进行不同方式解析、展示为不同样式
 */
export default {
  name: 'message',
  components: {
    TextMessage, SystemMessage, ImageMessage,
  },
  props: {
    chat: Object,
    sessionInfo: Object,
  },
  render(createElement) {
    let messageType = 'text-message';
    const { Type = 1 } = this.chat;
    switch (Type) {
      case 10000: // '系统消息'
        messageType = 'system-message';
        break;
      case 1: // '文本'
        messageType = 'text-message';
        break;
      case 3: // '图片'
        messageType = 'image-message';
        break;
      case 34: // '语音'
      case 35: // '邮件'
      case 42: // '名片'
      case 43: // '视频'
      case 44: // '视频'
      case 47: // '表情'
      case 48: // '位置'
      case 49: // '链接'
      case 50: // '通话'
      case 62: // '视频'
      default:
        messageType = 'text-message';
    }
    return createElement(messageType, {
      props: this.$props,
    });
  },
};