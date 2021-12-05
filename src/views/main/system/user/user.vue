<template>
  <div class="user">
    <!--    搜索查询-->
    <SearchForm :FormConfig="FormConfig" @pageSearch="pageSearch" ></SearchForm>

    <!--    数据展示-->
    <SearchTable
      :TableConfig="TableConfig"
      pageName="users"
      buttonName="新建用户"
      ref="searchTable"
      @newClick="newClick"
      @editClick="editClick">
    </SearchTable>

<!--    创建用户的表单-->
    <SearchDialog :DialogConfig="DialogConfig" title="新建用户" ref="dialog"></SearchDialog>
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref } from 'vue'
  import { FormConfig } from './config/formConfig'
  import { TableConfig } from './config/tableConfig'
  import { DialogConfig } from './config/dialogConfig'
  //导入设计好的form,table,并传入配置
  import { SearchForm } from '@/components/search-form'
  import { SearchTable } from '@/components/search-table'
  import { SearchDialog } from '@/components/search-dialog'
  //导入封装好的请求hooks
  import {usePageSearch} from '@/hooks/usePageSearch'

  export default defineComponent({
    name: 'user',
    components: {
      SearchForm,
      SearchTable,
      SearchDialog
    },
    setup() {
      const [searchTable,pageSearch]=usePageSearch()

      const dialog=ref<InstanceType<typeof SearchDialog>>()
      //点击按钮改变子组件中的数据
      const newClick=()=>{
        dialog.value!.dialogVisible=true
      }
      const editClick=(row:any)=>{
        dialog.value!.dialogVisible=true
        console.log(row)
      }

      return {
        //传入需要创建的表单
        FormConfig,
        TableConfig,
        DialogConfig,
        pageSearch,
        searchTable,
        newClick,
        editClick,
        dialog
      }
    }
  })
</script>

<style scoped lang="less">

</style>
