import { tableConfigType } from '@/baseUI/table'

export const TableConfig: tableConfigType = {
  tableItem: [
    { props: 'id', label: 'ID', width: 60 },
    { props: 'name', label: '用户名', width: 120 },
    { props: 'realname', label: '真实姓名', width: 120 },
    { props: 'enable', label: '状态', width: 120, slotName: 'status' },
    { props: 'cellphone', label: '手机号码', width: 150 },
    { props: 'createAt', label: '创建时间', width: 200, slotName: 'create' },
    { props: 'updateAt', label: '更新时间', width: 200, slotName: 'update' },
    { label: '操作', slotName: 'control' }
  ],
  hasIndex: true,
  hasCheck: true,
  title:'用户列表'
}
