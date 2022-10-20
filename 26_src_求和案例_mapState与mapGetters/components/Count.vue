<!-- 作用域插槽 -->
<template>
    <div>
        <h1>当前求和为：{{zongHe}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>当前学校：{{xueXiao}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
        <button v-on:click="incrementOdd">当前求和为奇数再加</button>
        <button v-on:click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    name: 'Count',
    data() {
        return {
            //用户选择的数字
            n: 1,
        };
    },
    methods: {
        increment() {
            this.$store.dispatch('jia', this.n)
        },
        decrement() {
            this.$store.dispatch('jian', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n)
        }
    },
    computed: {
        //借助mapState生成计算属性，从state中读取数据。（对象写法）
        //1、‘...’是es6的语法,指的是将mapState()中的所有key-value放到computed里
        //2、mapState中的映射指：‘zongHe’是计算属性，与之对应的'sum'是vuex中state的属性名
        //3、注意key-value中的value的写法，需要有引号，表示这是字符串，如果没有引号，则会视为变量名
        //   而key可以加引号也可以不加引号，因为key一定是字符串
        ...mapState({ 'zongHe': 'sum', xueXiao: 'school' }),

        //如果mapState中的键值对的名字一样，比如sum:'sum'这种的，就可以使用数组写法的mapState
        //注意，如果key-value是一样的话，不能用es6的简写方式写成{sum}，因为简写方式默认这里的sum是变量名，而我们需要传的是字符串
        //用数组法
        // ...mapState(['sum', 'school']),


        //同理，有映射state的就有映射getters的
        //对象方法
        // ...mapGetters({bigSum:'bigSum'}),
        //数组方法
        ...mapGetters(['bigSum']),
        
    },
}
</script>
<style scoped>
button {
    margin-left: 5px;
}
</style>