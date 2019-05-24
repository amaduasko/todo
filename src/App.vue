<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <Header />
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <AddTodo v-on:add-todo="addTodo"/>
    </v-content>
    <v-content>
      <Todo v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </v-content>
  </v-app>
</template>

<script>
import Todo from './components/Todo'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'app',
  components: {
    Todo,
    Header,
    AddTodo
  },
  data(){
    return {
      todos:[
      ]
    }
  },
  methods:{
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(error => console.log(error))
      
    },
    addTodo(newTodo){
      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title, completed
      })
      .then(response => this.todos = [...this.todos, response.data])
      .catch(error => console.log(error))
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=7")
      .then(response => this.todos = response.data)
      .catch(error => console.log(error))
  }
}
</script>
<style>
.v-toolbar__content>:last-child{
  margin: auto;
}
</style>

