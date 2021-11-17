<template>
  <div class="user">
    <!--    搜索查询-->
    <SearchForm :FormConfig="FormConfig" @pageSearch="pageSearch"></SearchForm>

    <!--    数据展示-->
    <SearchTable
      :TableConfig="TableConfig"
      pageName="users"
      buttonName="新建用户"
      ref="searchTable"></SearchTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { FormConfig } from './config/formConfig'
  import { TableConfig } from './config/tableConfig'
  //导入设计好的form,table,并传入配置
  import { SearchForm } from '@/components/search-form'
  import { SearchTable } from '@/components/search-table'
  //导入封装好的请求hooks
  import {usePageSearch} from '@/hooks/usePageSearch'

  export default defineComponent({
    name: 'user',
    components: {
      SearchForm,
      SearchTable
    },
    setup() {
      const [searchTable,pageSearch]=usePageSearch()

      return {
        //传入需要创建的表单
        FormConfig,
        TableConfig,
        pageSearch,
        searchTable
      }
    }
  })
</script>

<style scoped lang="less">

</style>
