<template>
    <div>
        Userlist
        <div v-for="user in users" :key="user.id">
            {{user.name}}
        </div>
    </div>
</template>


<script>
import {mapState,mapActions} from 'vuex'
export default {
    // data(){
    //     return{
    //         users:[]
    //     }
    // },
    computed:{
        ...mapState('user',['users'])
        // users(){
        //      return this.$store.state.users;
        // },
        // todos(){
        //      return this.$store.state.todos;
        // }
    },
    created(){
        this.getUsers();
    },
    methods:{
        ...mapActions('user',['getUsers'])
        // getUsers(){
        //     this.$store.dispatch('getUsers')
        //     // axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        //     // console.log(res.data)
        //     // this.users=res.data;
        //     //     })
        //     }
        }
    }
</script>