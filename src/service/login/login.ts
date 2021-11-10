import myAxios from '@/service'
import {IAccount,ILoginResponse} from './type'


//发送请求
export function accountLoginRequest(account:IAccount){
  return myAxios.post<ILoginResponse>({
    url:'/login',
    data:account
  })
}
