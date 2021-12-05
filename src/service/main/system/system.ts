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

//新建请求
export function newData(url:string,query:object) {
  return myAxios.post<Response>({
    url:url,
    data:query
  })
}

//编辑请求
export function editData(url:string,query:object) {
  return myAxios.patch<Response>({
    url:url,
    data:query
  })
}
