// 专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name:'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    //注意： 一级路由加斜杠，二级路由即其子路由不需要加斜杠
                    path: "news",
                    component: News
                },
                {
                    //注意： 一级路由加斜杠，二级路由即其子路由不需要加斜杠
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name:'detail',
                            path: "detail",
                            component: Detail,
                        }
                    ]
                },
            ]
        },
    ]
})