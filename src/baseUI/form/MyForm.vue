<template>
  <div class="my-form">
    <el-form label-width="80px">
      <!--      一行-->
      <el-row :gutter="20">
        <template v-for="item in formItem">
<!--          普通输入框-->
          <template v-if="item.type == 'input'">
            <el-col :span="8">
              <el-form-item :label="item.label">
                <el-input :show-password="item.isShow" :placeholder="item.placeholder" v-bind="item.others"/>
              </el-form-item>
            </el-col>
          </template>
<!--          选择输入框-->
          <template v-else-if="item.type == 'select'">
            <el-col :span="8">
              <el-form-item :label="item.label">
                <el-select style="width: 100%;" :placeholder="item.placeholder" v-bind="item.others">
                  <template v-for="option in item.options">
                    <el-option :value="option.value">{{option.title}}</el-option>
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
<!--          时间选择输入框-->
          <template v-else-if="item.type == 'date-picker'">
            <el-col :span="8">
              <el-form-item :label="item.label">
                <el-date-picker style="width: 100%;" v-bind="item.others"></el-date-picker>
              </el-form-item>
            </el-col>
          </template>
        </template>
      </el-row>
    </el-form>
  </div>

</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { formType } from '@/baseUI'

  export default defineComponent({
    name: 'MyForm',
    props: {
      formItem: {
        type: Array as PropType<formType[]>,
        default: []
      }
    },
    setup() {

    }
  })
</script>

<style scoped lang="less">
  .my-form {
    padding: 20px;
  }
</style>
