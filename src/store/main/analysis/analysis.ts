import { IAnalysisState } from './type'
import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import {getAnalysisInfo} from '@/service/main/analysis/analysis'

export const AnalysisModule: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsCount: [],
      goodsSale: [],
      goodsFavor: [],
      addressSale: []
    }
  },
  getters: {},
  mutations: {
    saveGoodsCount(state,payload){
      state.goodsCount=payload
    },
    saveGoodsSale(state,payload){
      state.goodsSale=payload
    },
    saveGoodsFavor(state,payload){
      state.goodsFavor=payload
    },
    saveAddressSale(state,payload){
      state.addressSale=payload
    }
  },
  actions: {
    async getAnalysisAction(action){
      //获取各个商品总数
      const goodsCount=await getAnalysisInfo('/goods/category/count')
      //获取各个商品销量
      const goodsSale=await getAnalysisInfo('/goods/category/sale')
      //获取各个商品销量
      const goodsFavor=await getAnalysisInfo('/goods/category/favor')
      //获取商品不同地区的销量
      const addressSale=await getAnalysisInfo('/goods/address/sale')

      action.commit('saveGoodsCount',goodsCount.data)
      action.commit('saveGoodsSale',goodsSale.data)
      action.commit('saveGoodsFavor',goodsFavor.data)
      action.commit('saveAddressSale',addressSale.data)
    }
  }

}
