import * as echarts from 'echarts'
import ChinaMap from '../data/china.json'

//注册地图
echarts.registerMap('china',ChinaMap)

export default function(el:HTMLElement) {
  const initEChart = echarts.init(el)

  const setOption=(option:echarts.EChartsOption)=>{
    initEChart.setOption(option)
  }

  //监听窗口变化，图形一起变化
  window.addEventListener('resize',()=>{
    initEChart.resize()
  })


  return {
    initEChart,
    setOption
  }
}

