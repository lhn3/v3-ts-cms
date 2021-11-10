import { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import { accountLoginRequest, getUserInfo, getUserMenus } from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'

export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, infoDate: any) {
      state.userInfo = infoDate
    },
    saveUserMenus(state, menuData: any) {
      state.userInfo = menuData
    }
  },
  actions: {
    async accountLogin(action, payload: IAccount) {
      //发送登录请求
      const resultToken = await accountLoginRequest(payload)
      //如果登陆成功获取token
      const { id, name, token } = resultToken.data
      //本地保存
      localCache.setCache('token', token)
      //通过commit保存token
      action.commit('saveToken', token)

      //发送请求保存userInfo
      const resultInfo = await getUserInfo(id)
      const infoDate = resultInfo.data
      action.commit('saveUserInfo', infoDate)
      //本地保存
      localCache.setCache('userInfo', infoDate)

      //发送请求保存menu
      const resultMenu = await getUserMenus(infoDate.role.id)
      const menuData = resultMenu.data
      action.commit('saveUserMenus', menuData)
      localCache.setCache('userMenu', menuData)

      //登陆成功跳转到首页
      router.push('/main')
    },
    //刷新保持vuex数据
    localSaveVuex(action){
      const token=localCache.getCache('token')
      const userInfo=localCache.getCache('userInfo')
      const userMenu=localCache.getCache('userMenu')
      if (token && userInfo && userMenu){
        action.commit('saveToken',token)
        action.commit('saveUserInfo',userInfo)
        action.commit('saveUserMenus',userMenu)
      }
    }
  }
}
