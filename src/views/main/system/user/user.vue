<template>
  <div class="user">
<!--    v-bind遍历绑定属性并传递到组件中-->
    <MyForm v-bind="FormConfig"></MyForm>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { MyForm } from '@/baseUI/form'
  import { FormConfig } from './config/formConfig'

  export default defineComponent({
    name: 'user',
    components: {
      MyForm
    },
    setup() {
      //传入需要创建的表单
      return {
        FormConfig
      }
    }
  })
</script>

<style scoped lang="less">

</style>
