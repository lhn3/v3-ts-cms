import { createStore } from 'vuex'
import {loginModule} from './login/login'
import {IRootState} from './type'


export const store=createStore<IRootState>({
  state(){
    return{
      name:'',
      age:1
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login:loginModule
  },
})

//定义刷新保持vuex数据
export default function localVuex() {
  store.dispatch('login/localSaveVuex')
}
