import myAxios from '@/service'
import {Response} from '@/service/type'

export function getUserList(url:string,query:object) {
  return myAxios.post<Response>({
    url:url,
    data:query
  })
}
