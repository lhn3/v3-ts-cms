import myAxios from '@/service'
import {Response} from '@/service/type'

export function getDataList(url:string,query:object) {
  return myAxios.post<Response>({
    url:url,
    data:query
  })
}

//删除请求
export function deleteData(url:string) {
  return myAxios.delete<Response>({
    url:url,
  })
}
