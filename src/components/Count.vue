<!-- 作用域插槽 -->
<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
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
export default {
    name: 'Count',
    data() {
        return {
            //用户选择的数字
            n: 1,

        };
    },
    methods: {
        increment(){

        },
        decrement(){

        },
        incrementOdd(){

        },
        incrementWait(){
            setTimeout(() => {
                
            }, 500);
        }
    }
}
</script>
<style scoped>
    button {
        margin-left: 5px;
    }
</style>