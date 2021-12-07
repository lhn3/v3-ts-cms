<template>
  <MyEChart width="100%" height="280px" :option="option"/>
</template>

<script lang="ts">
  import {computed,defineComponent} from 'vue'
  import {MyEChart} from "@/baseUI/echart"

  export default defineComponent({
    name: 'RoseEChart',
    props:{
      data:{
        type:Array,
        default:()=>[
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
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
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 6
            },
            data: props.data
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
