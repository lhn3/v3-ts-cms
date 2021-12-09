<template>
  <MyEChart width="100%" height="280px" :option="option"/>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { MyEChart } from '@/baseUI/echart'
  import { coordinateData } from '../utils/coordinate-data'

  export default defineComponent({
    name: 'MapEChart',
    props: {
      data: {
        type: Array,
        default: () => [
          { name: '廊坊', value: 193 },
          { name: '菏泽', value: 194 },
          { name: '合肥', value: 229 },
          { name: '武汉', value: 273 },
          { name: '大庆', value: 279 }
        ]
      }
    },
    components: {
      MyEChart
    },
    setup(props) {
      let convertData = function(data: Array<any>) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          let geoCoord = coordinateData[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }

      const option = computed(() => {
       const data=props.data
        return {
          title: {
            text: '商品全国销售情况',
              left: 'center'
          },
          tooltip: {
            trigger: 'item',
              formatter: function(params: any) {
              return params.name + ' : ' + params.value[2]
            }
          },
          legend: {
            orient: 'vertical',
              right: 20,
              top: 10,
              data: ['销量']
          },
          visualMap: {
            min: 0,
              max: 70000,
              left: 20,
              bottom: 20,
              calculable: true,
              text: ['高', '低'],
              inRange: {
              color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(160, 32, 240)']
            }
          },
          geo: {
            map: 'china',
              roam: 'scale',
              label: {
              emphasis: {
                show: true,
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#FF4040',
                  borderColor: '#8B1A1A'
              },
              emphasis: {
                areaColor: '#FF8C69'
              }
            }
          },
          series: [{
            name: '销量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderWidth: 1
              }
            }
          },
            {
              type: 'map',
              map: 'china',
              geoIndex: 0,
              aspectScale: 0.75,
              tooltip: {
                show: false
              }
            }
          ]
        }

      })
      return {
        option
      }
    }
  })
</script>

<style scoped>

</style>
