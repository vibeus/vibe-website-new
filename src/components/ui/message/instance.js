import Message from './Message.vue';

/**
 * Message 实例操作
 * @param {Object} config 实例配置
 */
const createInstance = (config = {}) => {
  // 1、创建包裹容器，并设置外层的 Class 属性、消息计数
  const msgNode = document.createElement('div');
  msgNode.className = 'vb-message';

  // 消息计数，定义一个消息弹框的高度为 54 px，在多个消息排队打开的时候，通过设置 top 值使各组件错开。
  const height = 54; // 单个消息框高度
  const msgList = document.getElementsByClassName('vb-message');
  const msgListLen = msgList.length;
  msgNode.style.top = `${msgListLen * height + msgListLen * 8 + 25}px`;

  // 2、创建实例并挂载到 body
  const app = createApp(Message, {
    config,
    remove() {
      handleRemove(); // 移除元素，消息关闭后从 Dom 上取消挂载并移除
    }
  });

  // 挂载实例并追加到 body 结尾
  app.vm = app.mount(msgNode);
  document.body.appendChild(msgNode);

  // 3、实现取消挂载方法，和取消挂载后重新计数
  const resetMsgTop = () => {
    for (let i = 0; i < msgList.length; i++) {
      msgList[i].style.top = `${i * height}px`;
    }
  };

  const handleRemove = ()=> {
    app.unmount(msgNode);
    document.body.removeChild(msgNode);
    resetMsgTop();
  };

  app.close = () => {
    handleRemove();
  };

  return app;
};
export default createInstance;
