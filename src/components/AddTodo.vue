<template>
    <form @submit="addItem">
        <input type="text" placeholder="Add your new todo" v-model="title">
        <input type="submit" value="Them" class="add-btn">
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(props, context) {
        const title = ref('')
        const addItem = event => {
            event.preventDefault()
            context.emit('addItem', title.value)
            title.value = ''
        }
        return {
            title,
            addItem
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
    padding: 25px 50px;
}
input{
    font-size: 20px;
}
input[type="text"]{
    flex: 10;
    padding: 20px;
}
input[type="submit"]{
    flex: 2;
}
</style>