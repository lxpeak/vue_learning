<!-- 作用域插槽 -->
<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为: {{ bigSum }}</h3>
        <h3>当前学校：{{ school }}</h3>
        <h3 style="color:red">Person组件的总人数为{{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button v-on:click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button v-on:click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: 'Count',
    data() {
        return {
            //用户选择的数字
            n: 1,
        };
    },
    methods: {
        //用...mapMutations,来代替上面的两个方法
        //借助mapMutations生成对应的方法，方法会调用commit调用mutations中相应的方法
        ...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),

        ...mapActions('countAbout', { incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
    },
    computed: {
        ...mapState("countAbout", ['sum', 'school']),
        ...mapState("personAbout", ['personList']),

        ...mapGetters("countAbout", ['bigSum']),

    },
}
</script>
<style scoped>
button {
    margin-left: 5px;
}
</style>