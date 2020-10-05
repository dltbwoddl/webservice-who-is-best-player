<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input 
    v-model="emptytext"
    type="text" 
    class="w-100 p-2" 
    placeholder="Type todo"
    @keyup.enter="plustodo">
    <hr>
    <Todo 
    v-for="todo in todos" 
    :key="todo.id" 
    :todo="todo" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue"

export default {
components:{
  Todo
},
data(){
  return{
    todos:[
      {id:1, text:"buy a car", checked:false}
    , {id:2, text:"play game", checked:false}
    ],
    emptytext:""
  }
},
methods:{
  plustodo(e){
    console.log(e.target.value)
    console.log(this.todos[this.todos.length-1].text)
    this.todos.push({
      id:this.todos[this.todos.length-1]+1,
      text:e.target.value,
      checked:false
      })
      this.emptytext="";
    }
  }
}
</script>
