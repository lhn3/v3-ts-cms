//搜索调用发送请求函数并传入参数
import { ref } from 'vue'
import { SearchTable } from '../components/search-table'

export function usePageSearch(){
  const searchTable = ref<InstanceType<typeof SearchTable>>()
  const pageSearch = (formData: any) => {
    searchTable.value?.getInfo(formData)
  }
  return [searchTable,pageSearch]
}
