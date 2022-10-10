<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <!-- 如下代码也能处理勾选框状态与todo中的状态一致，但是因为是修改的props中的todo中的id字段，
                即根据todo的内存地址，来修改todo中的done状态，
                所以不像直接修改props中的基本类型一样会报错（其实如果装了eslint的话还是会报错的）
                前者是指针的修改数据的方式，后者是直接修改数据
                这种方法不太推荐，因为如果原todo中移除了done这个字段，就会报错
             -->
            <!-- <input type="checkbox" v-model="todo.done">  -->
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>

export default {
    name: 'MyItem',
    //声明接收todo对象
    props: ['todo','checkTodo','deleteTodo'],
    methods:{
        //勾选or删除勾选
        handleCheck(id){
            //通知App组件将对应的todo对象的done值取反
            this.checkTodo(id)
        },
        //删除
        handleDelete(id){
            if(confirm("确定删除吗")){
                this.deleteTodo(id)
            }
        }
    }
}
</script>

<style scoped>
    /* item */
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    
    li label{
        float: left;
        cursor: pointer;
    }

    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top:-1px;
    }

    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before{
        content: initial;
    }

    li:last-child{
        border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>