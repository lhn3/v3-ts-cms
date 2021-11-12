<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFolds?'60px':'200px'">
        <NavMenu :isFoldMenus="isFolds"/>

      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @isFoldMenus="isFoldMenus"/>
        </el-header>
        <el-container class="page-content">
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>


</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { NavMenu } from '@/components/nav-menu'
  import { NavHeader } from '@/components/nav-header'

  export default defineComponent({
    name: 'Main',
    components: {
      NavMenu,
      NavHeader
    },
    setup() {
      let isFolds = ref(false)
      const isFoldMenus = (isFold: boolean) => {
        isFolds.value = isFold
      }

      return {
        isFoldMenus,
        isFolds
      }
    }
  })
</script>

<style scoped lang="less">
  @import '../../style/_var.less';

  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-content,
  .page {
    height: 100%;
  }

  .page-content {
    height: calc(100% - 48px);
  }

  .el-header,
  .el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
  }

  .el-header {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: @side-bg-color;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }

</style>
