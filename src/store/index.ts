import { createStore, Store, useStore as use_store } from 'vuex'

import { loginModule } from './login/login'
import { systemModule } from './main/system/system'
import { AnalysisModule } from './main/analysis/analysis'

import { IRootState, IStoreType } from './type'

import { getDataList } from '@/service/main/system/system'


export const store = createStore<IRootState>({
  state() {
    return {
      departments: [],
      roles: [],
      menus:[]
    }
  },
  mutations: {
    saveDepartments(state, payload) {
      state.departments = payload
    },
    saveRoles(state, payload) {
      state.roles = payload
    },
    saveMenus(state, payload) {
      state.menus = payload
    }
  },
  actions: {
    //请求所有部门、角色、菜单
    async getDepartments(action) {
      //部门请求
      const departmentsRes = await getDataList('/department/list', {
        offset: 0,
        size: 100
      })
      //角色请求
      const rolesRes = await getDataList('/role/list', {
        offset: 0,
        size: 100
      })
      //菜单请求
      const menusRes = await getDataList('/menu/list', {
        offset: 0,
        size: 100
      })
      action.commit('saveDepartments', departmentsRes.data.list)
      action.commit('saveRoles', rolesRes.data.list)
      action.commit('saveMenus', menusRes.data.list)
    }
  },
  modules: {
    login: loginModule,
    system: systemModule,
    analysis:AnalysisModule
  }
})

//定义刷新保持vuex数据
export default function localVuex() {
  store.dispatch('login/localSaveVuex')
  //每次刷新都会调用
  store.dispatch('getDepartments')
}

//定义一个自己的useStore
export function useStore(): Store<IStoreType> {
  return use_store()
}
