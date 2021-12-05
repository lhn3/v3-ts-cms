import { ref } from 'vue'
import { SearchDialog } from '@/components/search-dialog'

export function useDialog() {
  const showDialog=ref<InstanceType<typeof SearchDialog>>()
  const tableRow=ref({})

  //点击按钮改变子组件中的数据
  const newClick=()=>{
    showDialog.value!.dialogVisible=true
  }
  const editClick=(row:any)=>{
    showDialog.value!.dialogVisible=true
    // 导出一行数据用于数据回填
    tableRow.value=row
  }

  return [newClick,editClick,showDialog,tableRow]
}
