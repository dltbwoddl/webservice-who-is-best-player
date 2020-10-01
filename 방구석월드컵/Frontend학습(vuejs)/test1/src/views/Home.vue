<template>
  <div>
    <h1>this is Home page</h1>
    <p>{{name}}</p>
    <balmostory title="Home"/>
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
     name:"balmostory"
    }
  }
}
</script>


<style scoped>
/* scoped를 넣어야 템플릿내의 h1에만 스타일이 적용된다. 
때문에 보통의 경우에 다 넣어준다.*/
h1{
  color: red;
  font-size: 20px;
}
</style>