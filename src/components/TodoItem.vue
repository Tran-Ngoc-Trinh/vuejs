<template>
  <div class="todo-item" >
    <div >
        <input type="checkbox" @change="markItemCompleted"/>
        <span :class="{'is-completed' : todoProps.completed}" >&ensp; {{ todoProps.title }}</span>
    </div>
    <button class="del-btn" @click="deleteItem">Delete</button>
</div>
</template>

<script>
export default {
    props: ['todoProps'],
    setup(props, context) {
        const markItemCompleted = () => { 
            context.emit('completed', props.todoProps.id)
        }
        const deleteItem = () => {
            context.emit('deleted', props.todoProps.id)
        }
        return {
            markItemCompleted,
            deleteItem
        }
    }
}
</script>

<style scoped>
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
    font-size: 25px;
}
input{
    transform: scale(2.5);
}
span{
    font-size: 25px;
}
</style>