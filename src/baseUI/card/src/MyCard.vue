<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{title}}</span>
      </div>
    </template>
    <div class="card-body">
      <slot></slot>
    </div>
  </el-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'MyCard',
    props: {
      title: {
        type: String,
        require: true
      }
    }
  })
</script>

<style scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  .box-card {
    width: 100%;
  }
</style>
