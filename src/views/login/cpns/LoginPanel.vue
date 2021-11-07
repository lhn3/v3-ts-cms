<template>
  <div id="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><el-icon ><top-right /></el-icon>账号登录</span>
        </template>
        <LoginAccount></LoginAccount>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><el-icon><cellphone /></el-icon>手机登录</span>
        </template>
        <LoginPhone></LoginPhone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import LoginAccount from '@/views/login/cpns/LoginAccount'
  import LoginPhone from '@/views/login/cpns/LoginPhone'
  export default {
    name: 'LoginPanel',
    components:{
      LoginAccount,
      LoginPhone
    }
  }
</script>

<style scoped lang="less">
  #login-panel{
    width: 320px;
    .title{
      text-align: center;
    }
  }


</style>
