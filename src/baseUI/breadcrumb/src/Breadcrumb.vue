<template>
  <el-breadcrumb separator="/">
    <template v-for="bread in breads" :key="bread.name">
      <el-breadcrumb-item>{{bread.name}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
   export default defineComponent({
    name: 'Breadcrumb',
     props:{
       breads:{
         type:Array,
         default:()=>[]
       }
     }
  })
</script>

<style scoped lang="less">

</style>
