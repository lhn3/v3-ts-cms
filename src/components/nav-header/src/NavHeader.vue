<template>
  <!--  图标-->
  <div class="nav-header">
    <div class="icon" @click="changeFold">
      <el-icon size="20px">
        <template v-if="isFold">
          <d-arrow-right/>
        </template>
        <template v-else>
          <d-arrow-left/>
        </template>
      </el-icon>
    </div>

    <div class="content">
      <div class="text">面包屑</div>
      <UserInfo></UserInfo>
    </div>

  </div>


</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import UserInfo from './UserInfo.vue'

  export default defineComponent({
    name: 'NavHeader',
    emits: ['isFoldMenus'],
    components: {
      UserInfo
    },
    setup(props, { emit }) {
      let isFold = ref(false)
      const changeFold = () => {
        isFold.value = !isFold.value
        emit('isFoldMenus', isFold.value)
      }

      return {
        isFold,
        changeFold
      }
    }
  })
</script>

<style scoped lang="less">
  .nav-header {
    display: flex;
    width: 100%;
  }

  .icon {
    margin-left: -15px;
    padding: 10px 5px 0;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  .user {
    cursor: pointer;
  }
</style>
