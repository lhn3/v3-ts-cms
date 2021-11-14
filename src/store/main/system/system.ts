import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './type'
import {getUserList} from '@/service/main/system/system'

export const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations:{
    saveUserList(state,payload){
      state.userList=payload
    },
    saveUserCount(state,payload){
      state.userCount=payload
    }
  },
  actions: {
    async getSystemAction(action,payload:any) {
      const {url,query}=payload
      //发送请求获取用户列表并保存
      const userList=await getUserList(url,query)
      const {list,totalCount}=userList.data
      action.commit('saveUserList',list)
      action.commit('saveUserCount',totalCount)
    }
  }
}
