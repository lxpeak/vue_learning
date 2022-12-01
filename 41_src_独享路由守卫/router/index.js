// 专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    //注意： 一级路由加斜杠，二级路由即其子路由不需要加斜杠
                    path: "news",
                    component: News,
                    meta:{title:'新闻',isAuth:true},
                    //独享路由守卫
                    //注意没有后置的独享路由守卫
                    beforeEnter:(to, from, next)=>{
                        console.log("独享路由守卫", to, from);
                        //判断是否需要鉴权
                        if (to.meta.isAuth) {
                            //这里是在浏览器的localStorage中加一个键值对school-atguigu表示权限
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对，无权限查看！')
                            }
                        }
                        else {
                            next()
                        }
                    }
                },
                {
                    //注意： 一级路由加斜杠，二级路由即其子路由不需要加斜杠
                    path: "message",
                    component: Message,
                    meta:{title:'消息',isAuth:true},
                    children: [
                        {
                            name: 'detail',
                            //如果传params参数，就需要在后面加占位符，这是nodejs中的占位符
                            path: "detail/:id/:title",
                            component: Detail,
                            meta:{title:'详情'},

                            // props的第一种写法：值为对象，该对象中所有的key-value都会以props的形式传给Detail组件 
                            // props:{a:1,b:'hello'}

                            //props的第二种写法：值为布尔值,若布尔值为真，就会把该路由组件收到的所有params参数以props的形式传给Detail组件
                            // props:true

                            //props的第三种写法：值为函数
                            //这是一个回调函数，即我们定义的，但是我们不调用，由vue router调用这个函数
                            props($route) {
                                //如果是params参数就写成如下形式
                                return { id: $route.params.id, title: $route.params.title }
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

//全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log("前置路由守卫", to, from);
//     //判断是否需要鉴权
//     if (to.meta.isAuth) {
//         //这里是在浏览器的localStorage中加一个键值对school-atguigu表示权限
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限查看！')
//         }
//     }
//     else {
//         next()
//     }
// })

// //全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to, from) => {
//     console.log('后置路由守卫 :>> ', to, from);
//     document.title = to.meta.title || '如果前面没有值则这里取默认值'
// })

export default router;