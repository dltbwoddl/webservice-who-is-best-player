<template>
    <div>
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
    computed:{
        todos(){
            return this.$store.state.todos;
        }
    },
    methods:{
        // checkboxtoggle(value){
        //     this.$emit('checkbox-toggle',value)
        // },
        // clickdelete(todoid){
        //    this.$emit('click-delete',todoid) 
        // }
    }
}
</script>

<style lang="stylus" scoped>

</style>