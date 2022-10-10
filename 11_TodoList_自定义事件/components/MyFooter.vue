<template>
    <div class='todo-footer' v-show="total">
        <label>
            <!-- 两种写法 -->
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <!-- 这种写法只用了v-model更简洁，但是需要把isALL写成完整的get和set形式，
                但是不用写methods中的checkAll方法了 -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> /全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>

export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            //一般写法
            // let i = 0
            // this.todos.forEach(todo => {
            //     if (todo.done) {
            //         i++
            //     }
            // });
            // return i

            //优化的写法
            return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        },
        isAll: {
            get() {
                return this.total === this.doneTotal && this.total > 0
            },
            set(value) {
                // this.checkAllTodo(value)
                this.$emit('checkAllTodo', value)
            }
        }
    },
    methods: {
        checkAll(e) {
            // this.checkAllTodo(e.target.checked)
            this.$emit(checkAllTodo, e.target.checked)
        },
        clearAll(){
            // this.clearAllTodo()
            this.$emit('clearAllTodo')
        }
    }
}
</script>
<style scoped>
</style>