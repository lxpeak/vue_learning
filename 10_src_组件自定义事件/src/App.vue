<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- v-on是绑定事件，这里的atguigu是一个事件标志，Student组件里用$emit触发atguigu事件后，
      再调用这里的getStudentName方法-->
    <!-- 通过自定义事件传递数据 -->
    <Student v-on:atguigu="getStudentName" />

    <!-- 第二种自定义事件，但是这种要手动在mounted或者其他方法里将自定义事件放到组件上 -->
    <!-- 不要被“自定义事件”这几个字迷惑了，其实这里的自定义事件就是一个标记，
      其他组件通过这个标记可以找到这个组件，然后这个组件根据这个标记调用某个方法 -->
    <Student ref="student" />

    <!-- 给组件中加的事件都会被认为是自定义事件，即使是@click这种本来就有的事件，
      如果想使用原生事件，请用.native。
      如果没有用.native修饰符的话，只能像上面一样在Student组件中使用this.$emit('click')来触发这个事件
     -->
    <Student ref="student" @click.native="nativeClick"/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student';

export default {
  name: 'App',
  components: { Student, School },
  data() {
    return {
      msg: '你好啊'
    }
  },
  methods: {
    getSchoolName(name) {
      console.log("学校名是：", name);
    },
    getStudentName(name, ...params) {
      console.log("学生名是：", name, params);
    },
    nativeClick(){
      alert(1)
    }
  },
  /** <!-- 不要被“自定义事件”这几个字迷惑了，其实这里的自定义事件就是一个标记，
      其他组件通过这个标记可以找到这个组件，然后这个组件根据这个标记调用某个方法。
      换句话说就是这个组件提供了一个atguigu的方法，然后其他组件通过$emit的方式调用这个方法
      然后这边的组件再调用atguigu绑定的方法。这里绑定的方法其实就是一个回调函数 -->
      */
  mounted() {
    // 绑定自定义事件
    this.$refs.student.$on('atguigu', this.getStudentName);
    // 谁触发的atguigu事件，这个事件回调中的this就是谁，所以上面这种和下面这种的方法的this是不一样的
    // 上面这种已经用this.getStudentName强调了调用的是这个组件的方法，所以调用的是这个组件的方法，那么this也就是这个组件
    // 下面这种匿名函数的方式没有明确这个方法是谁调用的，那么就默认是触发事件的组件调用的这个方法，也就是Student组件实例对象
    this.$refs.student.$on('atguigu', function () {
      console.log(this);
    });
    //箭头函数的this指向函数定义时的对象，所以将上面这种方式改成箭头函数的形式就和第一种的this一样了
    //或者说箭头函数没有自己的this，那么它往外找就找到了mounted的this也就是当前组件实例对象
    this.$refs.student.$on('atguigu', () => {
      console.log(this);
    });


    // 绑定自定义事件（一次性的）
    // this.$refs.student.$once('atguigu', this.getStudentName);
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
