<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
    destroy-on-close
    center>

    <MyForm v-bind="DialogConfig" v-model="formData"></MyForm>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="subDialog">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, computed } from 'vue'
  import { MyForm } from '@/baseUI/form/index'
  import { useStore } from 'vuex'


  export default defineComponent({
    name: 'SearchDialog',
    props: {
      DialogConfig: {
        type: Object,
        default: () => ({})
      },
      title: {
        type: String,
        require: true
      },
      tableRow: {
        type: Object,
        default: () => ({})
      },
      pageName: {
        type: String,
        require: true
      },
      otherInfo:{
        type:Object,
        default:()=>({})
      }
    },
    components: {
      MyForm
    },
    setup(props) {
      const dialogVisible = ref(false)
      const formData = ref<any>({})
      const store = useStore()

      //监听传入tableRow
      //数据回填
      watch(() => props.tableRow, (newValue: any) => {
        for (let item of props.DialogConfig.formItem) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }, {
        deep: true
      })

      //监听确定按钮发送网络请求
      const subDialog = () => {
        dialogVisible.value = false
        if (Object.keys(props.tableRow).length > 0) {
          //编辑
          store.dispatch('system/editSystemAction',{
            pageName:props.pageName,
            id:props.tableRow.id,
            query: { ...formData.value,...props.otherInfo }
          })
        } else {
          //新建
          store.dispatch('system/newSystemAction',{
            pageName:props.pageName,
            query: { ...formData.value,...props.otherInfo }
          })
        }
      }

      return {
        dialogVisible,
        formData,
        subDialog
      }
    }
  })
</script>

<style scoped>

</style>
