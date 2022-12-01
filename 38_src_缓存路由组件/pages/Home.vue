<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul>
                <li>
                    <router-link to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link to="/home/message">Message</router-link>
                </li>
            </ul>
        </div>
        <!-- include里填的是组件的名字，即<script>里的name值,不是文件名 -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        //这里存放数据
        return {

        };
    },
}
</script>
<style scoped>

</style>