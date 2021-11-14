import { createStore, Store, useStore as use_store } from 'vuex'
import { loginModule } from './login/login'
import { systemModule } from './main/system/system'
import { IRootState, IStoreType } from './type'


export const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 1
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login: loginModule,
    system:systemModule
  }
})

//定义刷新保持vuex数据
export default function localVuex() {
  store.dispatch('login/localSaveVuex')
}

//定义一个自己的useStore
export function useStore(): Store<IStoreType> {
  return use_store()
}
