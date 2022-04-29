import axios from 'axios';
import { Loading, Message } from '@vcomp/ui';

let reqConfig;

const service = axios.create();

// 请求拦截
service.interceptors.request.use(
  (request) => {
    reqConfig = request;
    if (request.bfLoading) {
      Loading.show();
    }
    if (request.isParams) {
      request.params = request.data;
      request.data = {};
    }
    return request;
  },
  (err) => {
    Promise.reject(err);
  }
);
// 响应拦截
service.interceptors.response.use(
  (res) => {
    const { msg, code } = res.data;
  
    const successCode = '0,200,20000';
    if (successCode.includes(code)) {
      return res.data;
    } else {
      if (code === 403) {
        MessageBox.confirm('请重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // const userStore = useUserStore();
          // userStore.resetState().then(() => {
          //   router.push({ path: '/login' });
          // });
        });
      }
      //返回错误信息
      //如果未catch 走unhandledrejection进行收集
      //注：如果没有return 则，会放回到请求方法中.then ,返回的res为 undefined
      return Promise.reject(res.data);
    }
  },
  (err) => {
    /*http错误处理，处理跨域，404，401，500*/
    if (Loading)
      Loading.close();
    Message.error(err);
    //如果是跨域
    //Network Error,cross origin
    const errObj = {
      msg: err.toString(),
      reqUrl: reqConfig.baseURL + reqConfig.url,
      params: reqConfig.isParams ? reqConfig.params : reqConfig.data
    };
    return Promise.reject(JSON.stringify(errObj));
  }
);

export function axiosReq({
  url,
  data,
  method,
  baseURL,
  timeout,
  isParams
}) {
  return service({
    url: url,
    method: method ?? 'get',
    data: data ?? {},
    isParams: isParams ?? false,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
    timeout: timeout ?? 15000
  });
}

export default axiosReq;
