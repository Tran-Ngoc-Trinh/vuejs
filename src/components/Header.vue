<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <nav>
      <router-link :to="{name: 'home'}" >Home</router-link>
      <p>|</p>
      <router-link :to="{name: 'about'}">About</router-link>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100wh; 
  height: 30vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav{
  text-align: center;
}
a{
  color: rgb(207, 41, 41);
}
</style>
