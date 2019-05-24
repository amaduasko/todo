<template>
    <v-container todo-item outline>
        <v-layout row wrap>
            <v-checkbox
            v-on:change="taskComplete"
            required
            ></v-checkbox>
            <p v-bind:class="{'is-complete':todo.completed}">{{todo.title}}</p>
            <v-btn color="error" @click="$emit('del-todo', todo.id)">delete</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'TodoItem',
    props:['todo'],
    methods:{
        taskComplete() {
            this.todo.completed = !this.todo.completed
        }
    }
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        border: 2px #ccc solid;
    }

    .is-complete {
        text-decoration: line-through;
    }
    p{
        width: 50%;
    }
</style>


