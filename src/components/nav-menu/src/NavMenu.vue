<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="">
      <span class="title" v-if="!isFoldMenus">Vue3+TS</span>
    </div>
    <!--             :unique-opened="true" 唯一打开-->
    <el-menu :default-active="defaultActive"
             class="el-menu"
             :unique-opened="true"
             text-color="#b7bdc3"
             active-text-color="#0a60bd"
             :collapse="isFoldMenus"
    >
      <template v-for="v1 in menus" :key="v1.id">

        <!--        第一层二级菜单-->
        <template v-if="v1.children">
          <el-sub-menu :index="v1.id+''">
            <template #title>
              <el-icon>
                <monitor/>
              </el-icon>
              <span>{{v1.name}}</span>
            </template>
            <template v-for="v2 in v1.children" :key="v2.id">

              <!--              &lt;!&ndash;              第二层二级菜单&ndash;&gt;-->
              <!--              <template v-if="v2.children">-->
              <!--                <el-sub-menu :index="v2.id+''">-->
              <!--                  <template #title>-->
              <!--                    <i v-if="v2.icon" :class="v2.icon"></i>-->
              <!--                    <span>{{v2.name}}</span>-->
              <!--                  </template>-->

              <!--                  &lt;!&ndash;        第三层一级菜单&ndash;&gt;-->
              <!--                  <template v-for="v3 in v2.children" :key="v3.id">-->
              <!--                    <el-menu-item :index="v3.id+''">{{v3.name}}</el-menu-item>-->
              <!--                  </template>-->
              <!--                </el-sub-menu>-->
              <!--              </template>-->

              <!--              &lt;!&ndash;        第二层一级菜单&ndash;&gt;-->
              <!--              <template v-else>-->
              <!--                <el-menu-item :index="v2.id+''">{{v2.name}}</el-menu-item>-->
              <!--              </template>-->

              <el-menu-item :index="v2.id+''" @click="menuClick(v2.url)">
                  <span>
                    {{v2.name}}
                  </span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>


        <!--        第一层一级菜单-->
        <template v-else>
          <el-menu-item :index="v1.id+''" @click="menuClick(v1.url)">
            <i v-if="v1.icon" :class="v1.icon"></i>
            <router-link :to="v1.url"><span>{{v1.name}}</span></router-link>
          </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>

</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import localCache from '@/utils/cache'
  import { useRoute, useRouter } from 'vue-router'
  //导入自定义useStore
  import { useStore } from '@/store'
  import { getMenuId } from '@/utils/menusRouter'

  export default defineComponent({
    name: 'NavMenu',
    props: {
      isFoldMenus: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const store = useStore()
      const router = useRouter()
      const route = useRoute()
      //获取对应用户下所有菜单
      const menus = computed(() => {
        return store.state.login.userMenus
      })

      //获取刷新后保持选择的菜单id
      const routePath = route.path
      let res = getMenuId(menus.value,routePath)!
      //刷新保持菜单选择
      const defaultActive = ref(res.id+'')

      //点击切换路由
      const menuClick = (url: string) => {
        router.push(url)
      }

      return {
        menus,
        menuClick,
        defaultActive
      }
    }
  })
</script>

<style scoped lang="less">
  .nav-menu {
    height: 100%;
    background-color: #0e2c52;

    .logo {
      display: flex;
      height: 28px;
      padding: 12px 10px 8px 10px;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .img {
        height: 100%;
        margin: 0 10px;
      }

      .title {
        font-size: 16px;
        font-weight: 700;
        color: white;
      }
    }

    .el-menu {
      border-right: none;
    }

    // 目录
    .el-sub-menu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    }

    ::v-deep .el-submenu__title {
      background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
</style>
