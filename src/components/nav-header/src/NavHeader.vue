<template>
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


</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'NavHeader',
    emits:['isFoldMenus'],
    setup(props,{emit}) {
      let isFold = ref(false)
      const changeFold = () => {
        isFold.value = !isFold.value
        emit('isFoldMenus',isFold.value)
      }

      return {
        isFold,
        changeFold
      }
    }
  })
</script>

<style scoped lang="less">
  .icon {
    margin-left: -15px;
    padding: 0 5px;
    cursor: pointer;
  }
</style>
