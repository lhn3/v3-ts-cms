import { RouteRecordRaw } from 'vue-router'

export function menusRouter(userMenus: any): Array<RouteRecordRaw> {
  const routes: Array<RouteRecordRaw> = []

  //先保存文件夹中创建的所有路由export的对象
  const allRoutes: Array<RouteRecordRaw> = []
  //获取此路径下所有的.ts文件
  const routerFile = require.context('../router/main', true, /\.ts/)
  //取出所有文件的路径，以/main为当前路径
  routerFile.keys().forEach((key) => {
    const routerObject = require('../router/main' + key.split('.')[1])
    // 将所有对象加入
    allRoutes.push(routerObject.default)
  })

  //根据不同角色的菜单，返回对象的路由对象列表
  //定义一个递归函数
  const func = (userMenus: any) => {
    for (let menu of userMenus) {
      //如果type等于2就找出路由对象加入到routes中
      if (menu.type === 2) {
        //找到路由对象
        const res = allRoutes.find((v) => {
          return v.path === menu.url
        })
        if (res){
          routes.push(res)
        }
      } else {
        func(menu.children)
      }
    }

  }

  func(userMenus)
  return routes
}
