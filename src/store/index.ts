import { createStore, Store, useStore as use_store } from 'vuex'
import { loginModule } from './login/login'
import { systemModule } from './main/system/system'
import { IRootState, IStoreType } from './type'
import { getDataList } from '@/service/main/system/system'


export const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 1,
      departments:[],
      roles:[]
    }
  },
  mutations: {
    saveDepartments(state,payload){
      state.departments=payload
    },
    saveRoles(state,payload){
      state.roles=payload
    }
  },
  actions: {
    //请求所有部门和角色
    async getDepartments(action){
      const departmentsRes=await getDataList('/department/list',{
        offset:0,
        size:100
      })
      const rolesRes=await getDataList('/role/list',{
        offset:0,
        size:100
      })
      action.commit('saveDepartments',departmentsRes.data.list)
      action.commit('saveRoles',rolesRes.data.list)
    },
  },
  modules: {
    login: loginModule,
    system:systemModule
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
