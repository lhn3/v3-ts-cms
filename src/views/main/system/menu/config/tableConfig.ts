import { tableConfigType } from '@/baseUI/table'

export const TableConfig: tableConfigType = {
  tableItem: [
    { props: 'name', label: '菜单名称', width: 120 },
    { props: 'url', label: '菜单路由', width: 120 },
    { props: 'icon', label: '菜单图标', width: 120 },
    { props: 'createAt', label: '创建时间', width: 200, slotName: 'create' },
    { props: 'updateAt', label: '更新时间', width: 200, slotName: 'update' },
    { label: '操作', slotName: 'control' }
  ],
  // hasIndex: true,
  // hasCheck: true,
  title: '菜单列表',
  childs: {
    rowKey:"id",
    treeProps: "{ children: 'children' }"
  }
}
