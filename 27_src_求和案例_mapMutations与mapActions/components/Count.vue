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
        /**
         * 注意！
         * 由于vue中的方法如果不加括号，则会默认传触发事件对象，
         * 如@click="increament"，increament(value){}中就会接收到鼠标点击事件
         * 由于这个代码里的...mapMutations()中映射的mutations方法是需要参数的，
         * 如果@click='inceament'不主动传参数，就会默认传递鼠标点击事件，产生bug。
         * 所以在点击事件那里需要加上我们需要处理的参数，如@click="inceament(n)"
         * 这样一来，vuex中的mutations对应的方法就会得到n这个参数。
         */

        // increment() {
        //     this.$store.commit('JIA', this.n)
        // },
        // decrement() {
        //     this.$store.commit('JIAN', this.n)
        // },

        //用...mapMutations,来代替上面的两个方法
        //借助mapMutations生成对应的方法，方法会调用commit调用mutations中相应的方法
        ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
        //数组形式
        // ...mapMutations(['increment', 'decrement']),

        /**
         * 与上面的同理，都要在触发事件那里加参数。
         */
        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // }
        ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
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