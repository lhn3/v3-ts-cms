<template>
  <div class="search-form">
    <MyForm v-bind="FormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="warning" round @click="clickRefresh">
            <i>
              <el-icon size="17px">
                <refresh/>
              </el-icon>
            </i>
            重置
          </el-button>
          <el-button type="success" round @click="clickSearch">
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
  import { defineComponent, ref } from 'vue'
  import { MyForm } from '@/baseUI/form'

  export default defineComponent({
    emits:['pageSearch'],
    name: 'SearchForm',
    props: {
      FormConfig: {
        type: Object,
        require: true
      }
    },
    components: {
      MyForm
    },
    setup(props,{emit}) {

      //定义双向绑定的搜索字段,(根据配置)
      const forms: any = {}
      for (let i of props.FormConfig!.formItem) {
        let res = i['field']
        forms[res] = ''
      }
      //解构的方式保持forms中数据一直为空，防止双向绑定也会影响forms中数据变化
      //有利于重置获取到的forms中值为''
      //缺点：双向数据流子组件改变了父组件传递的参数
      const formData = ref({ ...forms })

      //重置
      const clickRefresh = () => {
        formData.value= { ...forms }
      }

      //搜索
      const clickSearch=()=>{
        emit('pageSearch',formData.value)
      }

      return {
        formData,
        clickSearch,
        clickRefresh
      }
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
