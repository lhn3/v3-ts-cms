<template>
  <div class="user">
<!--    v-bind遍历绑定属性并传递到组件中-->
    <MyForm v-bind="FormConfig" :formData="formData"></MyForm>
  </div>
</template>

<script lang="ts">
  import { defineComponent,reactive } from 'vue'
  import { MyForm } from '@/baseUI/form'
  import { FormConfig } from './config/formConfig'

  export default defineComponent({
    name: 'user',
    components: {
      MyForm
    },
    setup() {
      //定义双向绑定的搜索字段
      const formData=reactive({
        id:'',
        name:'',
        password:'',
        sport:'',
        time:[]
      })

      return {
        //传入需要创建的表单
        FormConfig,
        formData
      }
    }
  })
</script>

<style scoped lang="less">

</style>
