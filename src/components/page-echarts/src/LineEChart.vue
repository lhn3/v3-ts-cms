<template>
  <MyEChart width="100%" height="320px" :option="option"/>
</template>

<script lang="ts">
  import {computed,defineComponent} from 'vue'
  import {MyEChart} from "@/baseUI/echart"
  import * as echarts from 'echarts'

  export default defineComponent({
    name: 'LineEChart',
    props:{
      xAxis:{
        type:Array,
        default:()=>[]
      },
      yAxis:{
        type:Array,
        default:()=>[]
      }
    },
    components:{
      MyEChart
    },
    setup(props){
      const option = computed(()=>({
        legend: {},
        //鼠标滑过显示xy轴
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        //显示左上角操作菜单
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        //显示下拉条
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 10
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.xAxis
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        series: [
          {
            name: '分类商品销量',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: props.yAxis
          }
        ]
      }))
      return{
        option
      }
    }
  })
</script>

<style scoped>

</style>
