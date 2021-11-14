<template>
  <div class="user">
    <!--    搜索查询-->
    <SearchForm :FormConfig="FormConfig" :formData="formData"></SearchForm>

    <!--    数据展示-->
    <MyTable v-bind="TableConfig" :tableData="tableData" @getRowInfo="getRowInfo">
      <template #header>
        <el-button type="primary">新建用户</el-button>
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
        <el-button type="primary" circle><el-icon><edit/></el-icon></el-button>
        <el-button type="danger" circle><el-icon><delete/></el-icon></el-button>
      </template>


    </MyTable>

  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed } from 'vue'
  import { useStore } from '@/store'
  import { FormConfig } from './config/formConfig'
  import { TableConfig } from './config/tableConfig'
  //导入设计好的form，并传入配置
  import { SearchForm } from '@/components/search-form'
  import {MyTable} from '@/baseUI/table'

  export default defineComponent({
    name: 'user',
    components: {
      SearchForm,
      MyTable
    },
    setup() {
      //定义双向绑定的搜索字段
      const formData = reactive({
        id: '',
        name: '',
        password: '',
        sport: '',
        time: []
      })

      //发送网络请求
      const store = useStore()
      store.dispatch('system/getSystemAction', {
        url: 'users/list',
        query: {
          offset: 0,
          size: 10
        }
      })

      //table要展示的数据
      const tableData = computed(() => {
        return store.state.system.userList
      })

      //监听选择中的行
      const getRowInfo=(v:any)=>{
        console.log(v)
      }

      return {
        //传入需要创建的表单
        FormConfig,
        formData,
        tableData,
        TableConfig,
        getRowInfo
      }
    }
  })
</script>

<style scoped lang="less">

</style>
