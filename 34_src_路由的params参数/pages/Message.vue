<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 建议用第二种 -->
                
                <!-- 第一种方式 -->
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->

                <!-- 建议用第二种 -->
                <!-- 第二种方式 -->
                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <router-link :to="{
                    // 传递params参数时不能用path只能用name
                    name:'detail',
                    params:{
                        id:m.id,
                        title:m.title,
                    }
                }">
                    {{ m.title }}
                </router-link>

            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "Message",
    components: {},
    data() {
        //这里存放数据
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
                { id: '004', title: '消息004' },
            ]
        };
    },
}
</script>
<style scoped>

</style>