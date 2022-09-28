<script setup >
import {  computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => route.meta.layout || "" )
</script>



<template>
  <header>
    <div class="wrapper">
      <component :is="layout" title="Cong viec can lam">
      </component>
      <router-view></router-view>
    </div>
  </header>
</template>

<style scoped>


</style>
