<template>
    <div>
        <input 
            v-model="emptytext"
            type="text" 
            class="w-100 p-2" 
            placeholder="Type todo"
            @keyup.enter="plustodo_2">
        </div>

</template>

<script>
export default {
    data(){
  return{
    emptytext:""
  }
},
methods:{
  plustodo_2(e){
      this.$store.dispatch('todo/addTodo',e.target.value)
      // this.$store.commit('ADD_TODO',e.target.value)
      this.emptytext=""
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>