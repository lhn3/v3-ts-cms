import { formConfigType } from '@/baseUI/form'

//Dialog的配置
export const DialogConfig: formConfigType = {
  formItem: [
    {
      type: 'input',
      label: '角色名',
      field: 'name',
      placeholder: '请输入角色名'
    },
    {
      type: 'input',
      label: '描述',
      field: 'intro',
      placeholder: '请输入描述'
    }
  ],
  labelWidth: '100px',
  colSpan: { span: 24 }
}
