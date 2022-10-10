<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList';
import MyFooter from './components/MyFooter';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      todos: [
        { id: "001", title: "抽烟", done: false },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "烫头", done: false },
      ]
    }
  },
  methods: {
    //父组件中创建一个方法addTodo，然后将这个方法传给子组件，这样就能实现子组件给父组件传值
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id!==id)
    },
    //全选or全不选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    //清楚所有已经完成的todo
    clearAllTodo(){
      this.todos = this.todos.filter(todo=>{
        return !todo.done
      })
    }
  }
}
</script>

<style>
</style>
