import axios from 'axios'
import { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus/lib'

//导入自己封装的类型
import { RequestInterceptors, myRequestConfig } from './type'

//创建封装axios类
export default class myRequest {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  loading?: any

  //baseConfig用自己添加了拦截器的AxiosRequestConfig类型
  //创建实例化之后即调用
  constructor(baseConfig: myRequestConfig) {
    //创建axios实例对象
    this.instance = axios.create(baseConfig)

    //拦截器
    this.interceptors = baseConfig.interceptors

    //请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    //响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //定义全部请求拦截器
    this.instance.interceptors.request.use((config) => {
      console.log('全部请求拦截，成功')
      //定请求时的加载动画
      this.loading = ElLoading.service({
        lock: true,
        text: '正在加载...',
        background: 'rgba(0,0,0,0.2)'
      })
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全部响应拦截，成功')
        //删除加载动画
        this.loading?.close()
        return res.data
      },
      (err) => {
        //删除加载动画
        this.loading?.close()
        return err
      }
    )
  }

  //  定义request方法
  request<T>(config: myRequestConfig): Promise<T> {
    //返回一个promise
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: myRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: myRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: myRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  put<T>(config: myRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  patch<T>(config: myRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
