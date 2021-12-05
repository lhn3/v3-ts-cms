import { RouteRecordRaw } from 'vue-router'
import { breadType } from '@/baseUI/breadcrumb'

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
        if (res) {
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

//获取刷新后保持选择的菜单id
export function getMenuId(userMenu: any, routePath: any, bread?: Array<breadType>): any {
  for (let item of userMenu) {
    if (item.type == 1) {
      const res = getMenuId(item.children ?? [], routePath)
      if (res) {
        //如果要获取面包屑
        if (bread) {
          bread.push({ name: item.name, path: item.url })
          bread.push({ name: res.name, path: res.url })
          return bread
        }
        return res.id
      }
    } else if (item.type == 2 && item.url == routePath) {
      return item
    }
  }
}

//获取面包屑内容 上级菜单名/此级菜单名
export function getBreadcrumb(userMenu: any, routePath: any) {
  let bread: Array<breadType> = []
  return getMenuId(userMenu, routePath, bread)
}

//获取按钮权限列表
export function mapButtonPermission(userMenu: any) {
  const permission: Array<string> = []

  //递归判断
  const func = (menus: any) => {
    for (let item of menus) {
      //如果type不等于3则继续调用子菜单
      if (item.type == 1 || item.type == 2) {
        func(item.children ?? [])
      } else {
        //将按钮权限名称添加到一个空列表中
        permission.push(item.permission)
      }
    }
  }
  func(userMenu)

  return permission
}

//编辑按钮获取所有权限叶子结点id
export function getMenuLeaves(menuList: any) {
  const leaves: number[] = []

  const func = (items: any) => {
    for (let item of items) {
      if (item.children == null || item.children.length < 0) {
        leaves.push(item.id)
      } else {
        func(item.children)
      }
    }
  }
  func(menuList)

  return leaves

}
