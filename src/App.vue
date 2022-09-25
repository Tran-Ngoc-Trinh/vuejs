<script setup>
import Header from "./components/Header.vue";
import Todos from "./views/Todos.vue"
import { ref } from 'vue'

const title = ref("Cong viec can lam");

</script>



<template>
  <header>
    <div class="wrapper">
      <Header :title="title" />
      <Todos/>
    </div>
  </header>
</template>

<style scoped>


</style>
