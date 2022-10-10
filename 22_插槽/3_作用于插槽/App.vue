<template>
  <div class="container">
    <Category title="游戏">
      <template scope="xxx">
        <ul>
          <li v-for="(game, index) in xxx.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 
        这里用了es6的解构赋值，就是那边传过来一个对象，而我只需要里面的games就可以写成{games:games} 
        又因为games和games名字一样，就可以只写一个games
      -->
      <template scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">{{game}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">{{game}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: 'App',
  components: { Category },
  data() {
    return {

    }
  },
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
