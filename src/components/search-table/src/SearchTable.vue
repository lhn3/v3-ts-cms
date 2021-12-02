<template>
  <div class="search-table">
    <MyTable v-bind="TableConfig" :tableData="tableData" :tableCount="tableCount" v-model:page="pageInfo">
      <template #header>
        <el-button type="primary" v-if="Create">{{buttonName}}</el-button>
      </template>

      <!--      修改状态的显示-->
      <template #status="scope">
        <!--        拿到的scope为插槽传入的数据-->
        <el-button :type="scope.row.enable==1?'primary':'info'" plain>
          {{scope.row.enable==1?'活跃':'不活跃'}}
        </el-button>
      </template>

      <!--      修改时间的显示-->
      <template #create="scope">
        {{$filters.formatTime(scope.row.createAt)}}
      </template>
      <template #update="scope">
        {{$filters.formatTime(scope.row.updateAt)}}
      </template>

      <!--修改操作的显示-->
      <template #control v-if="Update">
        <el-button type="primary" circle v-if="Update">
          <el-icon>
            <edit/>
          </el-icon>
        </el-button>
        <el-button type="danger" circle v-if="Delete">
          <el-icon>
            <delete/>
          </el-icon>
        </el-button>
      </template>

<!--      定义动态插槽-->
<!--      接收外部插槽位置传递的数据再以相同插槽名字传到上一层-->
      <template v-for="item in slotItems" :key="item.slotName" #[item.slotName]="scope">
<!--        定义一个插槽供外部使用-->
        <slot :row="scope.row" :name="item.slotName"></slot>
      </template>


    </MyTable>

  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, watch } from 'vue'
  import { MyTable } from '@/baseUI/table'
  import { useStore } from '@/store'
  import {usePermissions} from '@/hooks/usePermissions'

  export default defineComponent({
    name: 'SearchTable',
    components: {
      MyTable
    },
    props: {
      TableConfig: {
        type: Object,
        require: true
      },
      pageName: {
        type: String,
        require: true
      },
      buttonName: {
        type: String,
        require: true
      }
    },
    setup(props) {
      //获取按钮权限
      const Create=usePermissions(props.pageName!,'create')
      const Update=usePermissions(props.pageName!,'update')
      const Delete=usePermissions(props.pageName!,'delete')
      const Query=usePermissions(props.pageName!,'query')

      //发送网络请求
      const store = useStore()
      const pageInfo = ref({ pageSize: 10, pageCurrent: 1 })
      watch(pageInfo, () => getInfo())
      const getInfo = (formData: any = {}) => {
        //如果没有查询权限直接返回，不发送网络请求
        if (!Query) return
        store.dispatch('system/getSystemAction', {
          pageName: props.pageName,
          query: {
            offset: (pageInfo.value.pageCurrent-1) * pageInfo.value.pageSize,
            size: pageInfo.value.pageSize,
            ...formData
          }
        })
      }
      getInfo()


      //table要展示的数据
      const tableData = computed(() => store.getters['system/gettersList'](props.pageName))
      const tableCount = computed(() => store.getters['system/gettersCount'](props.pageName))

      //获取传过来的配置中需要插槽的名字(除去固定插槽)
      const slotItems=props.TableConfig!.tableItem.filter((item:any)=>{
        if(item.slotName=='status' ||item.slotName=='create' || item.slotName=='update' || item.slotName=='control'|| item.slotName==null) return false
        return true
      })
      return {
        tableData,
        tableCount,
        getInfo,
        pageInfo,
        slotItems,
        Create,
        Update,
        Delete
      }
    }
  })
</script>

<style scoped lang="less">

</style>
