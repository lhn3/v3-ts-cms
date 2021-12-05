<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
    destroy-on-close
    center>

    <MyForm v-bind="DialogConfig" v-model="formData"></MyForm>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, computed } from 'vue'
  import { MyForm } from '@/baseUI/form/index'


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
        default:()=>({})
      }
    },
    components: {
      MyForm
    },
    setup(props) {
      const dialogVisible = ref(false)
      const formData = ref<any>({})

      //监听传入tableRow
      //数据回填
      watch(() => props.tableRow, (newValue:any) => {
        for (let item of props.DialogConfig.formItem){
          formData.value[`${item.field}`]=newValue[`${item.field}`]
        }
      },{
        deep:true
      })

      return {
        dialogVisible,
        formData
      }
    }
  })
</script>

<style scoped>

</style>
