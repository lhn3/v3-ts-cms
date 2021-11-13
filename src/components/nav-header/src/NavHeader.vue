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
      <Breadcrumb :breads="breads"></Breadcrumb>
      <UserInfo></UserInfo>
    </div>

  </div>


</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import UserInfo from './UserInfo.vue'
  import { Breadcrumb } from '@/baseUI/breadcrumb'
  import { useRoute } from 'vue-router'
  import { useStore } from '@/store'
  import { getBreadcrumb } from '@/utils/menusRouter'

  export default defineComponent({
    name: 'NavHeader',
    emits: ['isFoldMenus'],
    components: {
      UserInfo,
      Breadcrumb
    },
    setup(props, { emit }) {
      //是否折叠菜单
      let isFold = ref(false)
      const changeFold = () => {
        isFold.value = !isFold.value
        emit('isFoldMenus', isFold.value)
      }

      //获取面包屑
      const breads = computed(() => {
        const route = useRoute()
        const store = useStore()
        const routePath = route.path
        const menus = store.state.login.userMenus
        return getBreadcrumb(menus, routePath)
      })

      return {
        isFold,
        changeFold,
        breads
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
