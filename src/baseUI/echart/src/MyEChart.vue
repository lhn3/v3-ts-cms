<template>
  <div class="echart" ref="el" :style="{width: width,height:height}"></div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted,watchEffect } from 'vue'
  import useECharts from '../hooks/useECharts'

  export default defineComponent({
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '360px'
      },
      option:{
        type:Object,
        require:true
      }
    },
    setup(props) {
      //获取dom节点
      const el = ref<HTMLElement>()

      onMounted(() => {
        //初始化
        const res=useECharts(el.value!)
        //导入option
        watchEffect(() => res.setOption(props.option!))
      })

      return{
        el
      }
    }

  })


</script>

<style scoped>

</style>
