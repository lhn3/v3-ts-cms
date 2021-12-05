import { formConfigType } from '@/baseUI/form'

//Dialog的配置
export const DialogConfig: formConfigType = {
  formItem: [
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
      type: 'input',
      label: '手机号码',
      field: 'cellphone',
      placeholder: '请输入手机号码'
    },
    {
      type: 'input',
      label: '密码',
      show:false,
      field: 'password',
      placeholder: '请输入密码'
    },
  ],
  labelWidth: '100px',
  colSpan: { span: 24 },
}
