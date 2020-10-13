<template>
    <div>
        completed todo:{{numberofcompletedtodo}}
    </div>
</template>
<script>
export default {
    computed:{
        numberofcompletedtodo(){
            return this.$store.getters.numberofcompletedtodo;
        }
    }    
}
</script>