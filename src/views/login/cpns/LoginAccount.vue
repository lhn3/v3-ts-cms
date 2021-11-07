<template>
  <div class="login-account">
    <!--    传入规则-->
    <el-form :rules="rules" :model="account" ref="formRef">
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
  import { defineComponent, reactive, ref } from 'vue'
  import { ElForm } from 'element-plus/lib'
  import { rules } from '../config/rules.ts'

  export default defineComponent({
    name: 'LoginAccount',
    setup() {
      //双向绑定
      const account = reactive({
        username: '',
        password: ''
      })
      //监听表单验证成功与否
      // const formRef = ref<InstanceType<typeof ElForm>>()
      const formRef = ref()

      const loginAction = () => {
        //表单验证成功返回true
        formRef.value?.validate(v => {
          if (v) {
            console.log('登陆成功')
          } else {
            console.log('登陆失败')
          }
        })
      }
      return {
        account,
        rules,
        loginAction,
        formRef
      }
    }
  })
</script>

<style scoped></style>
