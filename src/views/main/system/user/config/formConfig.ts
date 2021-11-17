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
      label: '用户名',
      field: 'name',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '真实姓名',
      field: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'select',
      label: '状态',
      field: 'enable',
      placeholder: '请选择状态',
      options: [
        { title: '活跃', value: 1 },
        { title: '不活跃', value: 0 },
      ]
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
