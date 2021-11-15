import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './type'
import { getDataList } from '@/service/main/system/system'

export const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    gettersList(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.usersList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  mutations: {
    saveUsersList(state, payload) {
      state.usersList = payload
    },
    saveUsersCount(state, payload) {
      state.usersCount = payload
    },
    saveRoleList(state, payload) {
      state.roleList = payload
    },
    saveRoleCount(state, payload) {
      state.roleCount = payload
    }
  },
  actions: {
    async getSystemAction(action, payload: any) {
      const { pageName, query } = payload
      const url = `${pageName}/list`

      //发送请求获取用户列表并保存
      const dataList = await getDataList(url, query)
      const { list, totalCount } = dataList.data
      switch (pageName) {
        case 'users':
          action.commit('saveUsersList', list)
          action.commit('saveUsersCount', totalCount)
          break
        case 'role':
          action.commit('saveRoleList', list)
          action.commit('saveRoleCount', totalCount)
          break
      }


    }
  }
}
