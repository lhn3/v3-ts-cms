import { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'

export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {
    saveToken(state,token:string){
      state.token=token
    }
  },
  actions: {
    async accountLogin(action, payload:IAccount) {
      //发送登录请求
      const result=await accountLoginRequest(payload)
      //如果登陆成功获取token
      const {id,name,token}=result.data
      //通过commit保存token
      action.commit('saveToken',token)
    }
  }
}
