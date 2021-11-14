<template>
  <div class="search-form">
    <MyForm v-bind="FormConfig" :formData="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="warning" round>
            <i>
              <el-icon size="17px">
                <refresh/>
              </el-icon>
            </i>
            重置
          </el-button>
          <el-button type="success" round>
            <i>
              <el-icon size="17px">
                <search/>
              </el-icon>
            </i>
            搜索
          </el-button>
        </div>
      </template>
    </MyForm>

  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { MyForm } from '@/baseUI/form'

  export default defineComponent({
    name: 'SearchForm',
    props: {
      FormConfig: {
        type: Object,
        require: true
      },
      formData: {
        type: Object,
        require: true
      }
    },
    components: {
      MyForm
    }

  })
</script>

<style scoped lang="less">
  .header {
    margin-top: 0;
    color: #3ca877;
  }

  .footer {
    text-align: right;
    padding-bottom: 10px;
  }
</style>
