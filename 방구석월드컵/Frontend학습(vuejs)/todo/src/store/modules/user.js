import axios from 'axios'

export default{
    namespaced:true,
    state:{
          users:[]
    },
    mutations:{
        GETUSERS(state,value){
            state.users=value.data
        }
    },
    actions:{
        getUsers({commit}){
            axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
                commit('GETUSERS',res)
            })
        }
    }
}
