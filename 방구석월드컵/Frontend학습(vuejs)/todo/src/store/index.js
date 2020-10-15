import Vue from 'vue';
import Vuex from 'vuex';
import todo from "./modules/todo"
import user from "./modules/user"
Vue.use(Vuex);

export default new Vuex.Store({
    // vuex의 store가 비대해졌을 때 관련된 로직끼리 묶어서 파일로 만들어주는 것이 모듈이다.
    modules:{
        todo:todo,
        user:user
    }
})