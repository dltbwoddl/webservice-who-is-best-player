<template>
  <div>
    <h1>this is Home page</h1>
    <p>{{names}}</p>
    <balmostory>
     <template v-slot:first="Home" >
        <p>hello {{Home.homes}}</p>
     </template>
     <template v-slot:default>
       <p>hi</p>
     </template>
    </balmostory>
  </div>
</template>

<script>
import balmostory from '@/components/balmostory.vue'
// 컴포넌트 불러오기
export default{
  // 컴포넌트 등록하기.
  components:{
    balmostory
  },
  data(){
   return{
     names:"balmostory"
    }
  }
}
</script>


<style scoped>
h1{
  color: red;
  font-size: 20px;
}
</style>