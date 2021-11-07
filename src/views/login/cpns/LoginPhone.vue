<template>
  <div class="login-phone">
    <!--    传入规则-->
    <el-form :rules="rules" :model="phone">
      <!--  prop传入要验证的字段 -->
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"/>
      </el-form-item>
      <el-form-item label="验证码" prop="mg">
        <div class="mg">
          <el-input v-model="phone.mg"/>
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { defineComponent, reactive } from 'vue'

  export default defineComponent({
    name: 'LoginPhone',
    setup() {
      //双向绑定
      const phone = reactive({
        number: '',
        mg: ''
      })
//制定输入规则
      const rules = {
        //手机号规则
        number: [
          //必传
          {
            required: true,
            message: '请输入手机号！',
            trigger: 'blur'
          },
          //正则匹配内容
          {
            pattern: /^[0-9]{11}$/,
            message: '请输入正确的手机格式！',
            trigger: 'blur'
          }
        ],
        mg: [
          //必传
          {
            required: true,
            message: '请输入验证码！',
            trigger: 'blur'
          },
          //正则匹配内容
          {
            pattern: /^[0-9]{6}$/,
            message: '请输入6位验证码！',
            trigger: 'blur'
          }
        ]
      }

      return {
        phone,
        rules
      }
    }
  })
</script>
<style scoped>

  .mg {
    display: flex;
  }
  .btn{
    margin-left: 5px;
  }

</style>
