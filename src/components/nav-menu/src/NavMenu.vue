<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="">
      <span class="title">Vue3+TS</span>
    </div>
<!--             :unique-opened="true" 唯一打开-->
    <el-menu default-active="1" class="el-menu"
             :unique-opened="true"
             text-color="#b7bdc3"
             active-text-color="#0a60bd"
    >
      <template v-for="v1 in menus" :key="v1.id">

        <!--        第一层二级菜单-->
        <template v-if="v1.children">
          <el-sub-menu :index="v1.id">
            <template #title>
              <i v-if="v1.icon" :class="v1.icon"></i>
              <span>{{v1.name}}</span>
            </template>
            <template v-for="v2 in v1.children" :key="v2.id">

              <!--              第二层二级菜单-->
              <template v-if="v2.children">
                <el-sub-menu :index="v2.id">
                  <template #title>
                    <i v-if="v2.icon" :class="v2.icon"></i>
                    <span>{{v2.name}}</span>
                  </template>

                  <!--        第三层一级菜单-->
                  <template v-for="v3 in v2.children" :key="v3.id">
                    <el-menu-item :index="v3.id">{{v3.name}}</el-menu-item>
                  </template>
                </el-sub-menu>
              </template>

              <!--        第二层一级菜单-->
              <template v-else>
                <el-menu-item :index="v2.id">{{v2.name}}</el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>


        <!--        第一层一级菜单-->
        <template v-else>
          <el-menu-item :index="v1.id">
            <i v-if="v1.icon" :class="v1.icon"></i>
            <span>{{v1.name}}</span>
          </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>

</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  //导入自定义useStore
  import { useStore } from '@/store'

  export default defineComponent({
    name: 'NavMenu',
    setup() {
      const store = useStore()
      const menus = computed(() => {
        const res = store.state.login.userMenus
        return res
      })
      console.log(menus.value)
      return {
        menus
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
