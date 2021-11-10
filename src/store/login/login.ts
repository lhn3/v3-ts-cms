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
    saveUserMenus(state, menusData: any) {
      state.userMenus = menusData
    }
  },
  actions: {
    async accountLogin(action, payload: IAccount) {
      //发送登录请求
      const { name, password, isRememberKey } = payload
      const resultToken = await accountLoginRequest({ name, password })
      console.log(typeof resultToken)
      //如果登陆成功获取token
      const { id, token } = resultToken.data
      //本地保存
      localCache.setCache('token', token)
      //通过commit保存token
      action.commit('saveToken', token)
      //登陆成功之后才会记住密码
      //  判断是否有记住密码
      if (isRememberKey) {
        //  将密码写入本地
        localCache.setCache('username', name)
        localCache.setCache('password', password)
      } else {
        localCache.delCache('username')
        localCache.delCache('password')
      }


      //发送请求保存userInfo
      const resultInfo = await getUserInfo(id)
      const infoDate = resultInfo.data
      action.commit('saveUserInfo', infoDate)
      //本地保存
      localCache.setCache('userInfo', infoDate)

      //发送请求保存menus
      const resultMenus = await getUserMenus(infoDate.role.id)
      const menusData = resultMenus.data
      action.commit('saveUserMenus', menusData)
      localCache.setCache('userMenus', menusData)

      //登陆成功跳转到首页
      router.push('/main')
    },
    //刷新保持vuex数据
    localSaveVuex(action) {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        action.commit('saveToken', token)
        action.commit('saveUserInfo', userInfo)
        action.commit('saveUserMenus', userMenus)
      }
    }
  }
}
