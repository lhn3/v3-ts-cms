import { createStore } from 'vuex'
import {loginModule} from './login/login'
import {IRootState} from './type'


export default createStore<IRootState>({
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
