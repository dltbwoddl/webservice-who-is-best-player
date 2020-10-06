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
    :todo="todo" 
    @checkbox-toggle="checkboxtoggle"
    @click-delete="clickdelete"
    />
  
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
    },
    checkboxtoggle({id,checked}){
      const index=this.todos.findIndex(todo=>{
        return todo.id==id;
      });
      console.log(index, checked)
      this.todos[index].checked=checked
    },
    clickdelete(id){
      // const index=this.todos.findIndex(todo=>{
      //   return todo.id==id;
      // });
      // this.todos.splice(index,1);
      this.todos=this.todos.filter(todo=>todo.id!==id)
    }
  }
}
</script>
