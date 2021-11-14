import myAxios from '@/service'
import {Response} from '@/service/type'



//发送登录请求
export function accountLoginRequest(account:any){
  return myAxios.post<Response>({
    url:'/login',
    data:account
  })
}
//发送获取用户信息请求
export function getUserInfo(id:number){
  return myAxios.get<Response>({
    url:`/users/${id}`,
  })
}
//发送获取用户采单请求
export function getUserMenus(id:number){
  return myAxios.get<Response>({
    url:`/role/${id}/menu`,
  })
}
