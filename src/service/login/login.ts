import myAxios from '@/service'
import {IAccount,ILoginResponse} from './type'


//发送登录请求
export function accountLoginRequest(account:IAccount){
  return myAxios.post<ILoginResponse>({
    url:'/login',
    data:account
  })
}
//发送获取用户信息请求
export function getUserInfo(id:number){
  return myAxios.get<ILoginResponse>({
    url:`/users/${id}`,
  })
}
//发送获取用户采单请求
export function getUserMenus(id:number){
  return myAxios.get<ILoginResponse>({
    url:`/role/${id}/menu`,
  })
}
