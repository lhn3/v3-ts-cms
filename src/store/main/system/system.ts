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
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    gettersList(state: any) {
      return (pageName: string) => {
        return state[`${pageName}List`]
      }
    },
    gettersCount(state: any) {
      return (pageName: string) => {
        return state[`${pageName}Count`]
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
    },
    saveGoodsList(state, payload) {
      state.goodsList = payload
    },
    saveGoodsCount(state, payload) {
      state.goodsCount = payload
    },
    saveMenuList(state, payload) {
      state.menuList = payload
    },
    saveMenuCount(state, payload) {
      state.menuCount = payload
    }
  },
  actions: {
    async getSystemAction(action, payload: any) {
      const { pageName, query } = payload
      const url = `${pageName}/list`

      //发送请求获取用户列表并保存
      const dataList = await getDataList(url, query)
      const { list, totalCount } = dataList.data
      //将一个字符串首字母大写
      const title = pageName.replace(pageName[0], pageName.slice(0, 1).toUpperCase())
      action.commit(`save${title}List`, list)
      action.commit(`save${title}Count`, totalCount)
    }
  }
}
