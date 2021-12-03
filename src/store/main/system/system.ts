import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './type'
import { getDataList,deleteData } from '@/service/main/system/system'

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
      menuCount: 0,
      query:{}
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
    },
    saveQuery(state, payload) {
      state.query = payload
    }
  },
  actions: {
    //获取
    async getSystemAction(action, payload: any) {
      const { pageName, query } = payload
      const url = `${pageName}/list`

      //query存入vuex方便之后添加删除数据刷新别表
      action.commit('saveQuery',query)

      //发送请求获取用户列表并保存
      const dataList = await getDataList(url, query)
      const { list, totalCount } = dataList.data
      //将一个字符串首字母大写
      const title = pageName.replace(pageName[0], pageName.slice(0, 1).toUpperCase())
      action.commit(`save${title}List`, list)
      action.commit(`save${title}Count`, totalCount)
    },

    //删除
    async delSystemAction(action,payload:any){
      const url=`${payload.pageName}/${payload.id}`
      //发送请求
      await deleteData(url)
      // 刷新列表
      action.dispatch('getSystemAction',{
        pageName:payload.pageName,
        query:action.state.query
      })
    }

  }
}
