import myRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'


//创建一个请求实例
const myAxios = new myRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //拦截器
  interceptors: {
    requestInterceptor(config) {
      //携带token发送请求
      let token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default myAxios
