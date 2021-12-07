<template>
  <MyEChart width="100%" height="320px" :option="option"/>
</template>

<script lang="ts">
  import {computed,defineComponent} from 'vue'
  import {MyEChart} from "@/baseUI/echart"

  export default defineComponent({
    name: 'BarEChart',
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: props.xAxis
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: props.yAxis,
            type: 'bar'
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
