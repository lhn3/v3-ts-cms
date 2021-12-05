<template>
  <div class="role">
    <SearchForm
      :FormConfig="FormConfig"
      @pageSearch="pageSearch"/>

    <SearchTable
      :TableConfig="TableConfig"
      pageName="role"
      buttonName="新建角色"
      ref="searchTable"
      @newClick="newClick"
      @editClick="editClick"/>

    <SearchDialog
      :DialogConfig="DialogConfig"
      :title="title"
      ref="showDialog"
      :tableRow="tableRow"
      pageName="role"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { SearchForm } from '@/components/search-form'
  import { SearchTable } from '@/components/search-table'
  import { SearchDialog } from '@/components/search-dialog'

  import { TableConfig } from './config/tableConfig'
  import { FormConfig } from './config/formConfig'
  import { DialogConfig } from './config/dialogConfig'

  import { useDialog } from '@/hooks/useDialog'
  import { usePageSearch } from '@/hooks/usePageSearch'


  export default defineComponent({
    name: 'role',
    components: {
      SearchForm,
      SearchTable,
      SearchDialog
    },
    setup() {
      const [searchTable, pageSearch] = usePageSearch()
      const [newClick, editClick, showDialog, tableRow, title] = useDialog()

      return {
        FormConfig,
        TableConfig,
        DialogConfig,
        searchTable,
        pageSearch,
        newClick,
        editClick,
        showDialog,
        tableRow,
        title
      }
    }
  })
</script>

<style scoped></style>
