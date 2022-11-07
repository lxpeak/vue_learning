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
        <router-view></router-view>
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