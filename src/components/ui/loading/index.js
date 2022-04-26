import LoadingComponent from './Loading.vue';
 
const Loading =  {
  instance: null,
  parent: null,
  count: 0, 
  // 为了保证多个同时loading的时候，只显示一个，并且需要全部close之后才消失
  show() {
    if (this.count === 0) {
      this.instance = createApp(LoadingComponent);
      this.parent = document.createElement('div');
      const appDom = document.getElementById('app');
      appDom.appendChild(this.parent);
      this.instance.mount(this.parent);
    }
    this.count ++;
  },
  close() {
    this.count --;
    if (this.count <= 0) {
      this.count = 0;
      const appDom = document.getElementById('app');
      this.instance.unmount(this.parent);
      appDom.removeChild(this.parent);
    }
  }
};

export default Loading;
