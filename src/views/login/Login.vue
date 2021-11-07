<template>
  <div id="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts">
  import LoginPanel from './cpns/LoginPanel.vue'

  export default {
    name: 'Login',
    components:{
      LoginPanel
    }
  }
</script>


<style scoped lang="less">
  #login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url("../../assets/img/login-bg.svg");
  }

</style>
