<template>
  <div class="dashboard">
<!--    间距10px-->
    <el-row :gutter="10" class="above">
      <el-col :span="7">
        <MyCard title="分类商品数量(饼状图)"><MyEChart width="100%" height="300px" :option="option"></MyEChart></MyCard>
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
import {MyEChart} from "@/baseUI/echart"

export default defineComponent({
  name: 'dashboard',
  components:{
    MyCard,
    MyEChart
  },
  setup() {
    const state=useStore()

    //发送请求所有的商品销量/总数信息
    state.dispatch('analysis/getAnalysisAction')

    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }


    return {
      option
    }
  }
})
</script>

<style scoped>
  .above{
    margin-bottom: 20px;
  }
</style>
