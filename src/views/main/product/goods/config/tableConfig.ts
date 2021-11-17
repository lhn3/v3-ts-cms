import { tableConfigType } from '@/baseUI/table'

export const TableConfig: tableConfigType = {
  tableItem: [
    { props: 'id', label: 'ID', width: 100 },
    { props: 'name', label: '商品名', width: 120 },
    { props: 'imgUrl', label: '商品图片', width: 120 ,slotName:'img'},
    { props: 'oldPrice', label: '原价', width: 60 },
    { props: 'newPrice', label: '现价', width: 60 },
    { props: 'status', label: '状态', width: 120, slotName: 'status' },
    { props: 'createAt', label: '创建时间', width: 200, slotName: 'create' },
    { props: 'updateAt', label: '更新时间', width: 200, slotName: 'update' },
    { label: '操作', slotName: 'control'}
  ],
  hasIndex: true,
  hasCheck: true,
  title:'商品列表',
}
