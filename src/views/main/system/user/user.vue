<template>
  <div class="user">
    <!--    搜索查询-->
    <SearchForm :FormConfig="FormConfig" :formData="formData"></SearchForm>

    <!--    数据展示-->
    <SearchTable :TableConfig="TableConfig"></SearchTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed } from 'vue'
  import { FormConfig } from './config/formConfig'
  import { TableConfig } from './config/tableConfig'
  //导入设计好的form,table,并传入配置
  import { SearchForm } from '@/components/search-form'
  import { SearchTable } from '@/components/search-table'

  export default defineComponent({
    name: 'user',
    components: {
      SearchForm,
      SearchTable
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


      return {
        //传入需要创建的表单
        FormConfig,
        formData,
        TableConfig,
      }
    }
  })
</script>

<style scoped lang="less">

</style>
