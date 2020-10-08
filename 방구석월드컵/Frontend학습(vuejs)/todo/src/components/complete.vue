<template>
    <div>
        completed todo:{{numberofcompletedtodo}}
        {{todos}}
    </div>
</template>
<script>
export default {
    computed:{
        todos(){
            return this.$store.state.todos
        },
        numberofcompletedtodo(){
            return this.todos.filter(todo=>todo.checked).length;
        }
    }    
}
</script>