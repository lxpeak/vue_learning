//该文件用于创建Vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
//使用Vuex插件
Vue.use(Vuex)

//创建并导出store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
