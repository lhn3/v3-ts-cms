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
          3
        </MyCard>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <MyCard title="分类商品销量">
          4
        </MyCard>
      </el-col>
      <el-col :span="12">
        <MyCard title="分类商品收藏">
          5
        </MyCard>
      </el-col>
    </el-row>
  </div>


</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { MyCard } from '@/baseUI/card'

  import { PieEChart } from '@/components/page-echarts'

  export default defineComponent({
    name: 'dashboard',
    components: {
      MyCard,
      PieEChart
    },
    setup() {
      const state = useStore()

      //发送请求所有的商品销量/总数信息
      state.dispatch('analysis/getAnalysisAction')

      //获取饼状图数据
      const pieData = computed(() =>
        state.state.analysis.goodsCount.map((item: any) => {
          return { value: item.goodsCount, name: item.name }
        })
      )

      return {
        pieData
      }
    }
  })
</script>

<style scoped>
  .above {
    margin-bottom: 20px;
  }
</style>
