<template>
  <div id="login-panel">
    <h2 class="title">后台管理系统</h2>

    <!--    表单模块-->
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>账号登录</span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>手机登录</span>
        </template>
        <LoginPhone></LoginPhone>
      </el-tab-pane>
    </el-tabs>

    <!--    记住密码模块-->
    <div class="account-control">
      <el-checkbox v-model="isRememberKey">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button type="primary" class="login" @click="login">立即登录</el-button>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import LoginAccount from '@/views/login/cpns/LoginAccount'
  import LoginPhone from '@/views/login/cpns/LoginPhone'

  export default defineComponent({
    name: 'LoginPanel',
    components: {
      LoginAccount,
      LoginPhone
    },
    setup() {
      const isRememberKey = ref(true)
      //监听组件
      // const accountRef = ref < InstanceType < typeof LoginAccount >>()
      const accountRef = ref()

      const login = () => {
        //调用account组件中函数
        accountRef.value?.loginAction()
      }
      return {
        isRememberKey,
        login,
        accountRef
      }
    }
  })
</script>

<style scoped lang="less">
  #login-panel {
    width: 320px;

    .title {
      text-align: center;
    }
  }

  .account-control {
    display: flex;
    justify-content: space-between;
  }

  .login {
    width: 100%;
    margin-top: 3px;
  }
</style>
