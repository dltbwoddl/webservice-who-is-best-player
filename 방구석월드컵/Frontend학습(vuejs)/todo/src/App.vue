
<template>
  <div id="app" class="container">
    
    <h1 class="text-center">Todo App</h1>
    
    <addtodo 
    @ptodo="plustodo"
    />
    <hr>

    <Todolist 
    :todos="todos"
    @checkbox-toggle="checkboxtoggle"
    @click-delete="clickdelete"/>
  
  </div>
</template>

<script>
//문제1 : 다음중 어느 코드를 어떻게 고쳐야 todo리스트가 없을 때
//추가가 가능할까?
//문제2 : 다음중 어느 코드를 바꿔야 한 번에 모든 데이터가 사라지지 않을까?
import Todolist from "@/components/todolist.vue"
import addtodo from "@/components/addtodo.vue"
export default {
components:{
  Todolist,
  addtodo
},
data(){
  return{
    todos:[
      {id:1, text:"buy a car", checked:false}
    , {id:2, text:"play game", checked:false}
    ]
  }
},
methods:{
  plustodo(e){
    console.log(e.target.value)
    this.todos.push({
      //랜덤 숫자로 id를 설정하는 이유는 데이터 베이스를 사용하고 있지 않기 때문에 todos의 length는 2로 항상 똑같기 때문에
      // 새로운 todolist를 추가하면 id가 같아 삭제할 때 다 없어진다.
      id:Math.random(),
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
