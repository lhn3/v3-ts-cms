<template>
  <div class="dashboard">
    <!--    间距10px-->
    <el-row :gutter="10" class="above">
      <el-col :span="7">
        <MyCard title="分类商品数量(饼状图)">
          <PieEChart :data="pieData"></PieEChart>
        </MyCard>
      </el-col>
      <el-col :span="10">
        <MyCard title="商品全国销量">
          2
        </MyCard>
      </el-col>
      <el-col :span="7">
        <MyCard title="分类商品数量(玫瑰图)">
          <RoseEChart :data="pieData"></RoseEChart>
        </MyCard>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <MyCard title="分类商品销量">
          <LineEChart v-bind="lineData"></LineEChart>
        </MyCard>
      </el-col>
      <el-col :span="12">
        <MyCard title="分类商品收藏">
          <BarEChart v-bind="BarData"></BarEChart>
        </MyCard>
      </el-col>
    </el-row>
  </div>


</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { MyCard } from '@/baseUI/card'

  import { PieEChart, RoseEChart, LineEChart, BarEChart } from '@/components/page-echarts'

  export default defineComponent({
    name: 'dashboard',
    components: {
      MyCard,
      PieEChart,
      RoseEChart,
      LineEChart,
      BarEChart
    },
    setup() {
      const store = useStore()

      //发送请求所有的商品销量/总数信息
      store.dispatch('analysis/getAnalysisAction')

      //获取饼状图数据
      const pieData = computed(() =>
        store.state.analysis.goodsCount.map((item: any) => {
          return { value: item.goodsCount, name: item.name }
        })
      )

      //获取折线图数据
      const lineData = computed(() => {
          const xAxis: Array<any> = []
          const yAxis: Array<any> = []
          const res = store.state.analysis.goodsSale
          for (let item of res) {
            xAxis.push(item.name)
            yAxis.push(item.goodsCount)
          }
          return { xAxis, yAxis }
        }
      )

      //获取柱状图数据
      const BarData = computed(() => {
          const xAxis: Array<any> = []
          const yAxis: Array<any> = []
          const res = store.state.analysis.goodsFavor
          for (let item of res) {
            xAxis.push(item.name)
            yAxis.push(item.goodsFavor)
          }
          return { xAxis, yAxis }
        }
      )

      return {
        pieData,
        lineData,
        BarData
      }
    }
  })
</script>

<style scoped>
  .above {
    margin-bottom: 20px;
  }
</style>
