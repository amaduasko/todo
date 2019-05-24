<template>
  <form>
    <v-text-field
      v-model="title"
      label="add to do....."
      data-vv-name="title"
    ></v-text-field>
    <v-btn @click="addTodo">submit</v-btn>
  </form>
</template>

<script>
export default {
 name: 'AddTodo',
 data(){
        return {
         title: ''
        }
    },
    methods: {
        addTodo(evt) {
            evt.preventDefault();
            const newTodo = {
                title: this.title,
                completed : false,
            }
            //send to parent 
             this.$emit('add-todo', newTodo);

             this.title = ''
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        padding: 1%;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>

