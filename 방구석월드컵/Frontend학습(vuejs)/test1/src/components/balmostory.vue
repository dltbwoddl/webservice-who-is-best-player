
<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{name}}</p>
        <button @click="updateName">clickme</button>
    </div>
</template>

<script>
// 컴포넌트 만들기.
export default{
    props:{
        title:{
            type:String,
            default : "delfault title",
            required:false
        }
    },
    data(){
        return {name:"balmostory"}
    },
        methods:{
        updateName(){
            this.name = "balmostory updated"
        }
    }
}
</script>


<style scoped>

</style>