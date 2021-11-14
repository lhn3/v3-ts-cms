<template>
  <div class="my-table">
    <el-table :data="tableData" border style="width: 100%" >
      <template v-for="title in TableConfig" :key="title.props">
        <el-table-column :prop="title.props" :label="title.label" :width="title.width" align="center"/>
      </template>
      <el-table-column prop="control" label="操作" align="center"/>
    </el-table>
  </div>

</template>

<script lang="ts">
  import {defineComponent,PropType} from 'vue'
  import {tableType} from '@/baseUI/table'

  export default defineComponent({
    name: 'MyTable',
    props:{
      tableData:{
        type:Array,
        default:()=>[]
      },
      TableConfig:{
        type:Array as PropType<tableType[]>,
        default:()=>[]
      }
    }
  })
</script>

<style scoped lang="less">
  .my-table{
    padding: 20px;
    border-top: 20px solid #eff1f4;
  }
</style>
