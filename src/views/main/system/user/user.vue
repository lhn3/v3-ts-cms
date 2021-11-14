<template>
  <div class="user">
    <!--    v-bind遍历绑定属性并传递到组件中-->
    <SearchForm :FormConfig="FormConfig" :formData="formData" ></SearchForm>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { FormConfig } from './config/formConfig'
  //导入设计好的form，并传入配置
  import { SearchForm } from '@/components/search-form'

  export default defineComponent({
    name: 'user',
    components: {
      SearchForm
    },
    setup() {
      //定义双向绑定的搜索字段
      const formData = reactive({
        id: '',
        name: '',
        password: '',
        sport: '',
        time: []
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
