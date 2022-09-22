<script setup>
import { ref } from "vue";
const todoItem = ref(["cong viec 1", "Cong viec 2"]);
</script>

<template>
  <div class="wrapper">
    <div class="todo-item is-completed" v-for="item in todoItem" :key="item">
      <div><input type="checkbox" /> &ensp; {{ item }}</div>
      <button class="del-btn">Delete</button>
    </div>
  </div>
</template>

<style>
.wrapper {
  width: 100wh;
  height: 70vh;
  background-color: antiquewhite;
}
.todo-item {
  background-color: #f4f4f4;
  border-bottom: 1px dotted #ccc;
  margin: 0;
  padding: 20px 50px;

  display: flex;
  justify-content: space-between;
}
.is-completed{
    text-decoration: line-through;
}
.del-btn{
    cursor: pointer;
    border: none;
    background-color: red;
}
</style>
