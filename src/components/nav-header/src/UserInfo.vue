<template>
  <div class="user-info">
    <el-dropdown v-if="token">
      <div class="info">
        <el-avatar size="medium"
                   src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
        </el-avatar>
        <p>{{username}}</p>
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item divided @click="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div v-else @click="toLogin">
      去登录
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from '@/store'

  export default defineComponent({
    name: 'UserInfo',
    setup() {
      const router = useRouter()
      const store = useStore()
      const token = store.state.login.token
      const username = store.state.login.userInfo.name
      //去登录
      const toLogin = () => {
        router.push('/login')
      }
      //退出登录
      const loginOut = () => {
        store.dispatch('login/loginOut')
      }
      return {
        toLogin,
        token,
        username,
        loginOut
      }
    }
  })
</script>

<style scoped lang="less">
  .user-info {
    div {
      cursor: pointer;
      text-align: center;
    }

    .info {
      display: flex;
      align-items: center;

      p {
        margin: 0 5px;
      }
    }
  }

</style>
