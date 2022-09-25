<script >
import { ref } from "vue"
import TodoItem from "./TodoItem.vue"
import AddTodo from "./AddTodo.vue"
import axios from "axios"

export default {
  components:{TodoItem, AddTodo},
  setup() {
    const todoItem = ref([])
    const getAllTodo = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        todoItem.value = res.data
      } catch (error) {
        console.log(error)
      }
    }
    getAllTodo()

    const markItemCompleted = (id) => {
      todoItem.value[id-1].completed = !todoItem.value[id-1].completed
    }
    const deleteTodo = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        todoItem.value = todoItem.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
      
    }
    const addTodo = async (value) => {
      try {
        const newTodo = {
          id: todoItem.value.length+1,
          title: value,
          completed: false
        }
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        todoItem.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
      
    }

    return {
      todoItem,
      markItemCompleted,
      deleteTodo,
      addTodo,
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <AddTodo @addItem="addTodo" />
    <TodoItem v-for="todo in todoItem" :key="todo.id" :todoProps="todo"
     @completed="markItemCompleted" @deleted="deleteTodo"/>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100wh;
  height: 70vh;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  
}
</style>
