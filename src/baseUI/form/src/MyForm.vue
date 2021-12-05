<template>
  <div class="my-form">
    <slot name="header"></slot>
    <!--label文字宽度-->
    <el-form :label-width="labelWidth">
      <!--      一行-->
      <!--左右外边距各10-->
      <el-row :gutter="20">
        <template v-for="item in formItem" :key="item.label">
          <!--          普通输入框-->
          <template v-if="item.type == 'input'">
            <el-col v-bind="colSpan">
              <el-form-item :label="item.label">
                <el-input
                  :show-password="item.isShow"
                  :placeholder="item.placeholder"
                  v-bind="item.others"
                  v-model="modelValue[`${item.field}`]"
                />
              </el-form-item>
            </el-col>
          </template>
          <!--          选择输入框-->
          <template v-else-if="item.type == 'select'">
            <el-col v-bind="colSpan">
              <el-form-item :label="item.label">
                <el-select
                  style="width: 100%;"
                  :placeholder="item.placeholder"
                  v-bind="item.others"
                  v-model="modelValue[`${item.field}`]"
                >
                  <template v-for="option in item.options" :key="item.label">
                    <el-option :value="option.value">{{option.title}}</el-option>
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
          <!--          时间选择输入框-->
          <template v-else-if="item.type == 'date-picker'">
            <el-col v-bind="colSpan">
              <el-form-item :label="item.label">
                <!-- v-bind="item.others" 直接遍历对象中所有属性绑定-->
                <el-date-picker
                  style="width: 100%;"
                  v-bind="item.others"
                  v-model="modelValue[`${item.field}`]"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </template>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>

</template>

<script lang="ts">
  import { defineComponent, PropType, ref,computed,watch } from 'vue'
  import { formType } from '@/baseUI/form'
  import formData from '../../../../../课堂/code/hy-vue3-cms(预习)/src/views/main/system/user/config/search.config'

  export default defineComponent({
    name: 'MyForm',
    props: {
      //所需要的表单内容
      formItem: {
        type: Array as PropType<formType[]>,
        default: () => []
      },
      //label宽度
      labelWidth: {
        type: String,
        default: () => '100px'
      },
      //一行几个表单
      colSpan: {
        type: Object,
        default: () => ({
          //一共24份，表示每个el-col占的份数
          xl: 6,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        })
      },
      modelValue: {
        type: Object,
        default:()=>({})
      }
    },
    setup() {
      return{
      }

    }
  })
</script>

<style scoped lang="less">
  .my-form {
    padding: 20px 30px 0;
  }
</style>
