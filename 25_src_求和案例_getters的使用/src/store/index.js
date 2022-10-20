//该文件用于创建Vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//准备actions用于响应组件中的动作
//action中写业务逻辑
const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);
    }
}
//准备mutation用于操作数据（改变state）
//mutations中不写业务逻辑也不写ajax请求
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },

}
//准备state用于存储数据
const state = {
    //当前的和
    sum: 0
}
//准备getter,加工state中的数据
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并导出store
export default new Vuex.Store({
    //这里本来是写作actions:actions,但是es6中可以简写，所以写成下文中的形式
    actions,
    mutations,
    state,
    getters
})
