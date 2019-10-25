import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store= new Vuex.Store({
    state:{
        // 总价
        allMoney:0,
    },
    mutations: {
       gotobuy(state,allMoney){
            return state.allMoney=allMoney;
       }
    },
    getters:{
        allMoney(state){
            return state.allMoney;
        }
    }

})   
export default store