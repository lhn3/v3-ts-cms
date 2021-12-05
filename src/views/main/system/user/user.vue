<template>
  <div class="user">
    <!--    搜索查询-->
    <SearchForm :FormConfig="FormConfig" @pageSearch="pageSearch"></SearchForm>

    <!--    数据展示-->
    <SearchTable
      :TableConfig="TableConfig"
      pageName="users"
      buttonName="新建用户"
      ref="searchTable"
      @newClick="newClick"
      @editClick="editClick"/>

    <!--    创建用户的表单-->
    <SearchDialog
      :DialogConfig="DialogConfigRef"
      title="新建用户" ref="showDialog"
      :tableRow="tableRow"
      pageName="users"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { FormConfig } from './config/formConfig'
  import { TableConfig } from './config/tableConfig'
  import { DialogConfig } from './config/dialogConfig'
  //导入设计好的form,table,并传入配置
  import { SearchForm } from '@/components/search-form'
  import { SearchTable } from '@/components/search-table'
  import { SearchDialog } from '@/components/search-dialog'
  //导入封装好的请求hooks
  import { usePageSearch } from '@/hooks/usePageSearch'
  import { useDialog } from '@/hooks/useDialog'

  export default defineComponent({
    name: 'user',
    components: {
      SearchForm,
      SearchTable,
      SearchDialog
    },
    setup() {
      const [searchTable, pageSearch] = usePageSearch()
      const store = useStore()

      //点击新建和编辑是否显示密码输入框
      const newCb = () => {
        const res = DialogConfig.formItem?.find(item => {
          return item.field === 'password'
        })
        res!.isHidden = false
      }
      const editCb = () => {
        const res = DialogConfig.formItem?.find(item => {
          return item.field === 'password'
        })
        res!.isHidden = true
      }

      //获取新建列表中部门和角色数据
      const DialogConfigRef = computed(() => {
        //部门
        const department = DialogConfig.formItem?.find(item => {
          return item.field === 'departmentId'
        })
        department!.options=store.state.departments.map((item: { name: any; id: any }) => {
          return {title:item.name,value:item.id}
        })
        //角色
        const role = DialogConfig.formItem?.find(item => {
          return item.field === 'roleId'
        })
        role!.options=store.state.roles.map((item: { name: any; id: any }) => {
          return {title:item.name,value:item.id}
        })
        return DialogConfig
      })

      const [newClick, editClick, showDialog, tableRow] = useDialog(newCb, editCb)

      return {
        //传入需要创建的表单
        FormConfig,
        TableConfig,
        DialogConfigRef,
        pageSearch,
        searchTable,
        newClick,
        editClick,
        showDialog,
        tableRow
      }
    }
  })
</script>

<style scoped lang="less">

</style>
