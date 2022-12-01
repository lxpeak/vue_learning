<template>
    <ul>
        <li>news001 <input type="text"/></li>
        <li>news002 <input type="text"/></li>
        <li>news003 <input type="text"/></li>
    </ul>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: "News",

    components: {},
    data() {
        //这里存放数据
        return {

        };
    },
    beforeDestroy(){
        console.log('News组件即将被销毁');
    }
}
</script>
<style scoped>

</style>