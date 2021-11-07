<template>
  <div class="login-account">
    <!--    传入规则-->
    <el-form :rules="rules" :model="account">
    <!--  prop传入要验证的字段 -->
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { defineComponent, reactive } from 'vue'

  export default defineComponent({
    name: 'LoginAccount',
    setup() {
      //双向绑定
      const account = reactive({
        username: '',
        password: ''
      })

      //制定输入规则
      const rules = {
        //用户名规则
        username: [
          //必传
          {
            required: true,
            message: '请输入用户名！',
            trigger: 'blur'
          },
          //正则匹配内容
          {
            pattern: /^[0-9a-zA-Z]{3,12}$/,
            message: '请输入3-12数字或英文用户名！',
            trigger: 'blur'
          }
        ],
        password: [
          //必传
          {
            required: true,
            message: '请输入密码！',
            trigger: 'blur'
          },
          //正则匹配内容
          {
            pattern: /^[0-9a-zA-Z]{6,15}$/,
            message: '请输入6-15位密码！',
            trigger: 'blur'
          }
        ]
      }
      return {
        account,
        rules
      }
    }
  })
</script>

<style scoped>

</style>
