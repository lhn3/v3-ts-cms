<template>
  <MyEChart width="100%" height="300px" :option="option"/>
</template>

<script>
  import {computed} from 'vue'
  import {MyEChart} from "@/baseUI/echart"

  export default {
    name: 'PieEChart',
    props:{
      data:{
        type:Array,
        default:()=>[
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    },
    components:{
      MyEChart
    },
    setup(props){
      const option = computed(()=>({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }))
      return{
        option
      }
    }
  }
</script>

<style scoped>

</style>
