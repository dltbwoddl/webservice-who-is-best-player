
<template>
    <div>
        <p>one</p>
        <slot name="first" :homes="home"></slot>
        <p>two</p>
        <slot></slot>
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
        return {
            home:"balmostory"
            }
    }
}
</script>


<style scoped>

</style>