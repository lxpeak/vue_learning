<template>
    <div>
        <ul>
            <li>{{$route.params.id}}</li>
            <li>{{$route.params.title}}</li>
            <!-- 第一种写法 -->
            <!-- <li>a:{{a}}</li>
            <li>b:{{b}}</li> -->

            <!-- 第二种写法 -->
            <li>{{id}}</li>
            <li>{{title}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name:"Detail",
    //第一种写法
    // props:['a','b'],

    // 第二种写法
    props:['id','title'],
    data() {
        //这里存放数据
        return {

        };
    },
}
</script>
<style scoped>

</style>