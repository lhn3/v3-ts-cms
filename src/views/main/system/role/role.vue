<template>
  <div class="role">
    <SearchForm
      :FormConfig="FormConfig"
      @pageSearch="pageSearch"/>

    <SearchTable
      :TableConfig="TableConfig"
      pageName="role"
      buttonName="新建角色"
      ref="searchTable"
      @newClick="newClick"
      @editClick="editClick"/>

    <SearchDialog
      :DialogConfig="DialogConfig"
      :title="title"
      ref="showDialog"
      :tableRow="tableRow"
      pageName="role"
      :otherInfo="otherInfo">

      <!--      插槽内容-->
      <el-tree
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{children: 'children',label: 'name'}"
        @check="changeTree"
        :default-checked-keys="selectMenu"/>

    </SearchDialog>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref, nextTick } from 'vue'
  import { useStore } from 'vuex'
  import { SearchForm } from '@/components/search-form'
  import { SearchTable } from '@/components/search-table'
  import { SearchDialog } from '@/components/search-dialog'

  import { TableConfig } from './config/tableConfig'
  import { FormConfig } from './config/formConfig'
  import { DialogConfig } from './config/dialogConfig'

  import { useDialog } from '@/hooks/useDialog'
  import { usePageSearch } from '@/hooks/usePageSearch'

  import { getMenuLeaves } from '@/utils/menusRouter'


  export default defineComponent({
    name: 'role',
    components: {
      SearchForm,
      SearchTable,
      SearchDialog
    },
    setup() {
      //插槽内的数据回填
      const editCb = (row: any) => {
        const leaves = getMenuLeaves(row.menuList)
        //获取elTree节点设置选择的id值
        nextTick(() => selectMenu.value=leaves)
      }

      const newCb=()=>{
        selectMenu.value=[]
      }

      const [searchTable, pageSearch] = usePageSearch()
      const [newClick, editClick, showDialog, tableRow, title] = useDialog(newCb, editCb)
      const store = useStore()
      //编辑/新建的菜单id(其他参数)
      const otherInfo = ref()
      //数据回填设置默认选择的菜单
      const selectMenu=ref()

      //获取菜单选择
      const menus = computed(() => store.state.menus)

      const changeTree = (data1: any, data2: any) => {
        //获取到所有选到的权限id
        const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
        otherInfo.value = { menuList }
      }


      return {
        FormConfig,
        TableConfig,
        DialogConfig,
        searchTable,
        pageSearch,
        newClick,
        editClick,
        showDialog,
        tableRow,
        title,
        menus,
        changeTree,
        otherInfo,
        selectMenu
      }
    }
  })
</script>

<style scoped></style>
