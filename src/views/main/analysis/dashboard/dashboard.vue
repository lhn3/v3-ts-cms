<template>
  <div class="dashboard">
    <h2>dashboard</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const state=useStore()

    //发送请求所有的商品销量/总数信息
    state.dispatch('analysis/getAnalysisAction')



    return {

    }
  }
})
</script>

<style scoped></style>
