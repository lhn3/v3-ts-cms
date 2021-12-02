<template>
  <div class="goods">
    <SearchForm :FormConfig="FormConfig" @pageSearch="pageSearch"></SearchForm>
    <SearchTable :TableConfig="TableConfig" pageName="goods" buttonName="新建商品">
<!--      图片插槽-->
      <template #img="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list=[scope.row.imgUrl]
        >
        </el-image>
      </template>

      <!--      价格插槽-->
      <template #oldPrice="scope">
        ￥{{scope.row.oldPrice}}
      </template>
      <template #newPrice="scope">
        ￥{{scope.row.newPrice}}
      </template>

    </SearchTable>
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
