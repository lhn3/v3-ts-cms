<template>
  <div class="dashboard">
<!--    间距10px-->
    <el-row :gutter="10" class="above">
      <el-col :span="7">
        <MyCard title="分类商品数量(饼状图)"></MyCard>
      </el-col>
      <el-col :span="10">
        <MyCard title="商品全国销量"></MyCard>
      </el-col>
      <el-col :span="7">
        <MyCard title="分类商品数量(玫瑰图)"></MyCard>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <MyCard title="分类商品销量"></MyCard>
      </el-col>
      <el-col :span="12">
        <MyCard title="分类商品收藏"></MyCard>
      </el-col>
    </el-row>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useStore} from 'vuex'
import {MyCard} from '@/baseUI/card'

export default defineComponent({
  name: 'dashboard',
  components:{
    MyCard
  },
  setup() {
    const state=useStore()

    //发送请求所有的商品销量/总数信息
    state.dispatch('analysis/getAnalysisAction')

    return {
    }
  }
})
</script>

<style scoped>
  .above{
    margin-bottom: 20px;
  }
</style>
