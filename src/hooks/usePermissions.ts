// 权限列表数据类型
/*['system:users:create',
    'system:department:create',
    'system:menu:create',
    'system:role:create',
    'system:category:create',
    'system:goods:create', ]
*/

import {useStore} from 'vuex'

//判断传入的此页面名称下的此按钮是否有权限
export function usePermissions(pageName:string,action:string) {
  const store=useStore()
  const permissions=store.state.login.permissions
  const permission=`system:${pageName}:${action}`
  //但回布尔值
  return !!permissions.find((item:any)=>{
    return item==permission
  })
}
