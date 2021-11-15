<template>
  <div class="my-table">
    <div class="header">
      <h2 class="title">{{title}}</h2>
      <slot name="header"></slot>
    </div>
    <el-table :data="tableData" border style="width: 100%" @selection-change="getRowFunc">
      <!--      展示选择-->
      <el-table-column v-if="hasCheck" type="selection" width="40" align="center"/>
      <!--      展示序号-->
      <el-table-column v-if="hasIndex" type="index" align="center" label="序号" width="50"/>

      <template v-for="title in tableItem" :key="title.props">
        <!--        一列设置-->
        <el-table-column :prop="title.props" :label="title.label" :width="title.width" align="center">
          <!--          默认有一个default插槽-->
          <template #default="scope">
            <!--            scope.row一行的数据-->
            <!--            设置具名插槽，传递此行数据，达到修改一列数据展示形式-->
            <slot :name="title.slotName" :row="scope.row">
              {{scope.row[title.props]}}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>

      </slot>
    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { tableType } from '@/baseUI/table'

  export default defineComponent({
    name: 'MyTable',
    props: {
      tableData: {
        type: Array,
        default: () => []
      },
      tableItem: {
        type: Array as PropType<tableType[]>,
        default: () => []
      },
      hasIndex: {
        type: Boolean,
        default: false
      },
      hasCheck: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    emits: ['getRowInfo'],
    setup(props, { emit }) {
      //获取被选择的行的数组并发射出事件
      const getRowFunc = ((v: any) => {
        emit('getRowInfo', v)
      })
      return {
        getRowFunc
      }
    }
  })
</script>

<style scoped lang="less">
  .my-table {
    padding: 20px;
    border-top: 20px solid #eff1f4;
  }
.header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
  .title {
    text-align: left;
    color: #5c6b77;
    margin: 0;
    line-height: 40px;
  }
  .footer{
    text-align: right;
    margin-top: 10px;
  }
</style>
