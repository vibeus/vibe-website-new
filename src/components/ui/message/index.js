// 实现使用函数调用xtx-message组件的逻辑
import { createVNode, render } from 'vue';
import Message from './Message.vue';

// 准备dom容器
let msgDom = document.getElementById('message-container');
if (!msgDom) {
  msgDom = document.createElement('div');
  msgDom.setAttribute('class', 'message-container');
  msgDom.id = 'message-container';
  document.body.appendChild(msgDom);
}

// 定时器标识
let timer = null;

/**
 * type: ['warn', 'error', 'success]
 */
export default ({ type, text, duration = 3000 }) => {
  // 实现：根据xtx-message.vue渲染消息提示
  // 1. 导入组件
  // 2. 根据组件创建虚拟节点
  const vnode = createVNode(Message, { type, text });
  // 3. 准备一个DOM容器
  // 4. 把虚拟节点渲染挂载到DOM容器中
  render(vnode, msgDom);
  // 5. 开启定时，移出DOM容器内容
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, msgDom);  // 3秒后将组件从msgDom上移出
  }, duration);
};
