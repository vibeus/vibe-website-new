import axios from 'axios';
import { Loading, Message } from '@vcomp/ui';

/* start 将同一时刻的请求合并。*/
// let loadingInstance = null;
let needLoadingRequestCount = 0;
const startLoading = () => Loading.show();
const endLoading = () => Loading.close();

const showFullScreenLoading = () => {
  needLoadingRequestCount++ === 0 && startLoading();
};

const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return;
  --needLoadingRequestCount === 0 && endLoading();
};
/* end 将同一时刻的请求合并。*/

let reqConfig;

const service = axios.create();

// 请求拦截
service.interceptors.request.use(
  (request) => {
    reqConfig = request;
    if (reqConfig.bfLoading)
      showFullScreenLoading();

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
    const isSuccessful = String(res.status).startsWith('2');
    if (isSuccessful) {
      if (reqConfig.bfLoading)
        tryHideFullScreenLoading();
      return res.data;
    } else {
      // if (code === 403) {
      //   MessageBox.confirm('请重新登录', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     // const userStore = useUserStore();
      //     // userStore.resetState().then(() => {
      //     //   router.push({ path: '/login' });
      //     // });
      //   });
      // }
      //返回错误信息
      //如果未catch 走unhandledrejection进行收集
      //注：如果没有return 则，会放回到请求方法中.then ,返回的res为 undefined
      return Promise.reject(res.data);
    }
  },
  (err) => {
    console.log('err: ', err);
    /*http错误处理，处理跨域，404，401，500*/
    if (reqConfig.bfLoading)
      tryHideFullScreenLoading();

    const errMsg = err.toString();
    if (reqConfig.isAlertErrorMsg)
      Message.error(errMsg);
    //如果是跨域
    //Network Error,cross origin
    const errObj = {
      msg: errMsg,
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
  isParams,
  bfLoading,
  isAlertErrorMsg = false
}) {
  return service({
    url: url,
    method: method ?? 'get',
    data: data ?? {},
    isParams: isParams ?? false,
    bfLoading: bfLoading ?? false,
    isAlertErrorMsg : isAlertErrorMsg,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
    timeout: timeout ?? 15000
  });
}

export default axiosReq;
