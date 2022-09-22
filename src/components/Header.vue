<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
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
</style>
