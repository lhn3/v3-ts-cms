import { AxiosRequestConfig, AxiosResponse } from 'axios'


//定义拦截器hooks的类型声明
//为了可以传入拦截器中的函数
export interface RequestInterceptors {
  //请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  //响应拦截
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

//继承原来的RequestConfig类型声明并添加拦截器的类型声明
export interface myRequestConfig extends AxiosRequestConfig {
  //在原来的 AxiosRequestConfig 对象类型中添加 interceptors，并取名为 myRequestConfig
  interceptors?: RequestInterceptors,
}

