<script setup >
import Header from "./components/Header.vue";
import Todos from "./views/Todos.vue"
import { ref, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'

const title = ref("Cong viec can lam");
const route = useRoute()
console.log(route)
</script>



<template>
  <header>
    <div class="wrapper">
      <Header :title="title"/>
      <router-view></router-view>
    </div>
  </header>
</template>

<style scoped>


</style>
