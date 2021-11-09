import myRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

//创建一个请求实例
const myAxios = new myRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  //拦截器
  // interceptors:{
  //   requestInterceptor(config){
  //     console.log('请求成功拦截')
  //     //添加加载动画
  //     return config
  //   },
  //   responseInterceptor(res){
  //     console.log('响应成功拦截')
  //     return res
  //   },
  // }
})

export default myAxios
