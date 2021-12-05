import { tableConfigType } from '@/baseUI/table'

export const TableConfig: tableConfigType = {
  tableItem: [
    { props: 'id', label: 'ID', width: 100 },
    { props: 'name', label: '角色名', width: 120 },
    { props: 'intro', label: '描述', width: 120 },
    // { props: 'menuList', label: '管理范围', width: 120 },
    { props: 'createAt', label: '创建时间', width: 200, slotName: 'create' },
    { props: 'updateAt', label: '更新时间', width: 200, slotName: 'update' },
    { label: '操作', slotName: 'control'}
  ],
  hasIndex: true,
  hasCheck: true,
  title:'角色列表',
}
