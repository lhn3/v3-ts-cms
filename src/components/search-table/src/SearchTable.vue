<template>
  <div class="search-table">
    <MyTable v-bind="TableConfig" :tableData="tableData">
      <template #header>
        <el-button type="primary">{{buttonName}}</el-button>
      </template>

      <!--      修改状态的显示-->
      <template #status="scope">
        <!--        拿到的scope为插槽传入的数据-->
        <el-button :type="scope.row.enable==1?'primary':'info'" plain>
          {{scope.row.enable==1?'活跃':'不活跃'}}
        </el-button>
      </template>
      <!--      修改时间的显示-->
      <template #create="scope">
        {{$filters.formatTime(scope.row.createAt)}}
      </template>
      <template #update="scope">
        {{$filters.formatTime(scope.row.updateAt)}}
      </template>
      <!--修改操作的显示-->
      <template #control>
        <el-button type="primary" circle>
          <el-icon>
            <edit/>
          </el-icon>
        </el-button>
        <el-button type="danger" circle>
          <el-icon>
            <delete/>
          </el-icon>
        </el-button>
      </template>


    </MyTable>

  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { MyTable } from '@/baseUI/table'
  import { useStore } from '@/store'


  export default defineComponent({
    name: 'SearchTable',
    components: {
      MyTable
    },
    props: {
      TableConfig: {
        type: Object,
        require: true
      },
      pageName: {
        type: String,
        require: true
      },
      buttonName:{
        type:String,
        require:true
      }
    },
    setup(props) {
      //发送网络请求
      const store = useStore()
      store.dispatch('system/getSystemAction', {
        pageName: props.pageName,
        query: {
          offset: 0,
          size: 10
        }
      })

      //table要展示的数据
      const tableData = computed(() => store.getters['system/gettersList'](props.pageName))

      return {
        tableData
      }
    }
  })
</script>

<style scoped lang="less">

</style>
