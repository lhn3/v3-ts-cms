import { formConfigType } from '@/baseUI/form'

//到处所有的form的配置
export const FormConfig: formConfigType = {
  formItem: [
    {
      type: 'input',
      label: '菜单名称',
      field: 'name',
      placeholder: '请输入菜单名称'
    },
    {
      type: 'date-picker',
      label: '选择时间',
      field: 'createAt',
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
