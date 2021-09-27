<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div
    class="menu">
    <li v-for="item in menus" v-bind:key="item">{{item.name}}</li>
    </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      menus:this.$router.getRoutes()
    }
  },
  created(){
    console.log(this.$router.getRoutes())
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
