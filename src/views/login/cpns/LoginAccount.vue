<template>
  <div class="login-account">
    <!--    传入规则-->
    <el-form :rules="rules" :model="account" ref="formRef">
      <!--  prop传入要验证的字段 -->
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import {useStore} from 'vuex'
  import { ElForm } from 'element-plus/lib'
  import { rules } from '@/views/login/config/rules'
  import localCache from '@/utils/cache'

  export default defineComponent({
    name: 'LoginAccount',
    setup() {
      const store=useStore()
      //双向绑定
      const account = reactive({
        username: localCache.getCache('username') ?? '',
        password: localCache.getCache('password') ?? ''
      })
      //监听表单验证成功与否
      const formRef = ref<InstanceType<typeof ElForm>>()

      const loginAction = (isRememberKey: boolean) => {
        //表单验证成功返回true
        formRef.value?.validate((v) => {
          if (v) {
          //登录操作
            store.dispatch('login/accountLogin',
              {name:account.username,password:account.password,isRememberKey:isRememberKey})
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
