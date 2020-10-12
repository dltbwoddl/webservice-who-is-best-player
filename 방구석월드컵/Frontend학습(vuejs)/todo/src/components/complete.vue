<template>
    <div>
        completed todo:{{numberofcompletedtodo}}
    </div>
</template>
<script>
export default {
    computed:{
        numberofcompletedtodo(){
            return this.$store.state.todos.filter(todo=>todo.checked).length;
        }
    }    
}
</script>