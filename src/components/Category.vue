<!-- 作用域插槽 -->
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot>我是默认的一些内容</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            games: ['张三', 'lisi']
        };
    },
}
</script>
<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}

img {
    width: 100%;
}
</style>