<template>
  <div class="goods">
    <SearchForm :FormConfig="FormConfig" @pageSearch="pageSearch"></SearchForm>
    <SearchTable :TableConfig="TableConfig" pageName="goods" buttonName="新建商品"></SearchTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {SearchForm} from '@/components/search-form'
import {SearchTable} from '@/components/search-table'
import {FormConfig} from './config/formConfig'
import {TableConfig} from './config/tableConfig'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'goods',
  components:{
    SearchForm,
    SearchTable
  },
  setup() {
    const [searchTable,pageSearch]=usePageSearch()
    return {
      FormConfig,
      TableConfig,
      searchTable,
      pageSearch
    }
  }
})
</script>

<style scoped></style>
