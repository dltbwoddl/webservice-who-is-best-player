
<template>
    <div class="mb-2 d-flex">
      <input 
      type="checkbox" 
      :checked="todo.checked" 
      @change="checkboxtoggle">

      <span class="ml-3 flex-grow-1"
      :class="todo.checked? 'text-muted' :''"
      :style="todo.checked?  'text-decoration:line-through':''"
      >
      {{todo.text}}
      </span>
      <button 
      class="btn btn-danger btn-sm"
      @click="clickdelete"
      >
      Delete</button>
      {{numberofcompletedtodo}}
    </div>
</template>

<script>
export default{
    computed:{
        numberofcompletedtodo(){
            return this.$store.getters.numberofcompletedtodo;
        }
    },
    props:{
        todo:{
            type:Object,
            required:false
        }
    },
    methods:{
        checkboxtoggle(e){
            this.$store.dispatch('toggleTodo',{id:this.todo.id,checked:e.target.checked})
            // this.$store.commit('TOGGLE_TODO',{id:this.todo.id,checked:e.target.checked})

            // this.$emit('checkbox-toggle',{
            //     id:this.todo.id,
            //     checked:e.target.checked
            // })
        },
        clickdelete(){
            this.$store.dispatch('deleteTodo',this.todo.id)
            // this.$store.commit('DELETE_TODO',this.todo.id)
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>