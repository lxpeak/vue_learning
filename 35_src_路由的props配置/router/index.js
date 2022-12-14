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
                            //如果传params参数，就需要在后面加占位符，这是nodejs中的占位符
                            path: "detail/:id/:title",
                            component: Detail,

                            // props的第一种写法：值为对象，该对象中所有的key-value都会以props的形式传给Detail组件 
                            // props:{a:1,b:'hello'}

                            //props的第二种写法：值为布尔值,若布尔值为真，就会把该路由组件收到的所有params参数以props的形式传给Detail组件
                            // props:true

                            //props的第三种写法：值为函数
                            //这是一个回调函数，即我们定义的，但是我们不调用，由vue router调用这个函数
                            props($route){
                                //如果是params参数就写成如下形式
                                return {id:$route.params.id, title:$route.params.title} 
                                //如果是query参数就写成如下形式
                                // return {id:$route.query.id, title:$route.query.title} 
                            }

                            //或者使用解构赋值
                            // props({params}){
                            //     return {id:params.id, title:params.title} 
                            // }
                            //或者解构赋值的连续写法
                            // props({params:{id,title}}){
                            //     return {id, title} 
                            // }
                        }
                    ]
                },
            ]
        },
    ]
})