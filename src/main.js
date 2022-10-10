import Vue from 'vue'
import App from './App.vue'

//引入store
//文件夹下是index.js文件的话就不需要写成'./store/index.js'了，vue会自动找index.js文件，
//如果没有index.js文件就会报错，如果是其他文件名的话就需要指定文件名
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    //设置消息总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
