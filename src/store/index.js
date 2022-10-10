//该文件用于创建Vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//准备actions用于响应组件中的动作
const actions = {}
//准备mutation用于操作数据（改变state）
const mutations = {}
//准备state用于存储数据
const state = {
    //当前的和
    sum: 0
}

//创建并导出store
export default new Vuex.Store({
    //这里本来是写作actions:actions,但是es6中可以简写，所以写成下文中的形式
    actions,
    mutations,
    state
})
