export default{
    namespaced:true,
    state:{
        todos:[
            {id:1, text:"buy a car", checked:false}
          , {id:2, text:"play game", checked:false}
          ]
    },
    mutations:{
        ADD_TODO(state,value){
            state.todos.push({
            id:Math.random(),
            text:value,
            checked:false
        })
        state.emptytext="";
        },
        TOGGLE_TODO(state,{id,checked}){
            const index=state.todos.findIndex(todo=>{
                return todo.id==id;
              });
              state.todos[index].checked=checked
        },
        DELETE_TODO(state,todoid){
            const index=state.todos.findIndex(todo=>{
                return todo.id==todoid;
                });
            state.todos.splice(index,1);
        }
    },
    //비동기적 작업을 수행할 때 actions를 사용함.
    //주로 데이터 베이스를 활용할 때
    actions:{
        addTodo({commit},value){
            //비동기 작업->commit으로 데이터 바꾸기.
            setTimeout(function(){
                commit('ADD_TODO',value)
            },500);
        },
        toggleTodo({commit},{id,checked}){
            setTimeout(function(){
                commit('TOGGLE_TODO',{id,checked})
            },500);        },
        deleteTodo({commit},todoid){
            setTimeout(function(){
                commit('DELETE_TODO',todoid)
            },500);        },

    },
    getters:{
        numberofcompletedtodo:state=>{
            return state.todos.filter(todo=>todo.checked).length;
        }
    }
}