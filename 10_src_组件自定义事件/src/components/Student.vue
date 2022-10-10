<template>
    <div class='student'>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点我获得学生姓名</button>
        <button @click="unbind">解绑事件</button>
    </div>
</template>

<script>
export default {
    name:'student',
    data() {
        return {
            name:'张三',
            age:'18'
        };
    },
    methods:{
        sendStudentName(){
            //这里的组件自定义事件就是一个数据传递的方式
            this.$emit('atguigu', this.name, 1, '1', 'a')
        },
        unbind(){
            //解绑一个自定义事件
            this.$off('atguigu') 

            //解绑多个自定义事件（写成数组形式）
            // this.$off(['atguigu']) 

            // //解绑所有自定义事件
            // this.$off() 
        }
    }
}
</script>
<style scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>