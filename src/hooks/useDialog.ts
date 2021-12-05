import { ref } from 'vue'
import { SearchDialog } from '@/components/search-dialog'

type funcCb = (item?: any) => void

export function useDialog(newCb?: funcCb, editCb?: funcCb) {
  const showDialog = ref<InstanceType<typeof SearchDialog>>()
  const tableRow = ref({})
  const title = ref()

  //点击按钮改变子组件中的数据
  const newClick = () => {
    newCb && newCb()
    showDialog.value!.dialogVisible = true
    title.value = '新建'
    tableRow.value = {}
  }
  const editClick = (row: any) => {
    editCb && editCb(row)
    showDialog.value!.dialogVisible = true
    title.value = '编辑'
    // 导出一行数据用于数据回填
    tableRow.value = { ...row }
  }

  return [newClick, editClick, showDialog, tableRow, title]
}
