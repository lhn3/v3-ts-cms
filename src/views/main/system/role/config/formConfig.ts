import { formConfigType } from '@/baseUI/form'

//到处所有的form的配置
export const FormConfig: formConfigType = {
  formItem: [
    {
      type: 'input',
      label: 'ID',
      field: 'id',
      placeholder: '请输入ID'
    },
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
    },
    {
      type: 'date-picker',
      label: '选择时间',
      field: 'time',
      others: {
        //时间区间
        type: 'daterange',
        rangeSeparator: '—',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ],
  labelWidth: '100px'
  // colSpan: { span: 8 },
}
