import {formConfigType } from '@/baseUI/form'

//到处所有的form的配置
export const FormConfig: formConfigType = {
  formItem: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '密码',
      isShow: false,
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '爱好',
      placeholder: '请选择爱好',
      options: [
        { title: '篮球', value: '篮球' },
        { title: '足球', value: '足球' },
        { title: '羽毛球', value: '羽毛球' }
      ]
    },
    {
      type: 'date-picker',
      label: '选择时间',
      others: {
        //时间区间
        type: 'daterange',
        rangeSeparator: '—',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ],
  labelWidth: '100px',
  // colSpan: { span: 8 },
}
