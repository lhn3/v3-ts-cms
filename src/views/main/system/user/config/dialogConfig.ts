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
      isShow: true,      //默认不显示
      isHidden: false,   //默认不隐藏
      field: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '部门',
      field: 'departmentId',
      placeholder: '请选择部门',
      options: []
    },
    {
      type: 'select',
      label: '角色',
      field: 'roleId',
      placeholder: '请选择角色',
      options: []
    }
  ],
  labelWidth: '100px',
  colSpan: { span: 24 }
}
