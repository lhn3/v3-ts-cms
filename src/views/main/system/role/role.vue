<template>
  <div class="role">
    <SearchForm :FormConfig="FormConfig"></SearchForm>
    <SearchTable :TableConfig="TableConfig" :pageName="pageName" :buttonName="buttonName"></SearchTable>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
import { SearchForm } from '@/components/search-form'
import {SearchTable} from '@/components/search-table'
import {TableConfig} from './config/tableConfig'
import {FormConfig} from './config/formConfig'

export default defineComponent({
  name: 'role',
  components:{
    SearchForm,
    SearchTable,
  },
  setup() {

    const pageName='role'
    const buttonName='新建角色'

    return {
      FormConfig,
      TableConfig,
      buttonName,
      pageName,

    }
  }
})
</script>

<style scoped></style>
