<template>
  <div class="user">
    <!--    搜索查询-->
    <SearchForm :FormConfig="FormConfig" :formData="formData"></SearchForm>
    <!--    数据展示-->
    <MyTable :tableData="tableData" :TableConfig="TableConfig"></MyTable>

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

      //要展示的数据
      const tableData = computed(() => {
        return store.state.system.userList
      })

      return {
        //传入需要创建的表单
        FormConfig,
        formData,
        tableData,
        TableConfig
      }
    }
  })
</script>

<style scoped lang="less">

</style>
