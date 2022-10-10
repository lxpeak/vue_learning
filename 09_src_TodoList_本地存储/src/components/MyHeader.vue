<template>
    <div class='todo-header'>
        <input type="text" placeholder="请输入您的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
//在命令行中输入“npm i nanoid”来下载这个库。是类似于uuid的一个库
import { nanoid } from 'nanoid'

export default {
    name: 'MyHeader',
    //在props中的东西就放在了vue component组件实例中了，所以可以被直接使用
    props: ['addTodo'],
    data() {
        return {
            title:''
        }
    },
    methods: {
        add() {
            //校验对象
            if(!this.title.trim()) return alert('输入不能为空！')
            //将用户的输入包装成一个todo对象
            const todoObj = { id: nanoid(), title: this.title, done: false }
            //通知App组件去添加一个todo对象
            this.addTodo(todoObj)
            //清空数据
            this.title = ''
        }
    }
}
</script>
<style scoped>
</style>