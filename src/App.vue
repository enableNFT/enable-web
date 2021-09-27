<template>
  <a-layout>
    <a-layout-header
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="item in menus" v-bind:key="item" >{{item.name}}</a-menu-item>
      </a-menu>
      
    </a-layout-header>
    <a-layout-content
      :style="{ padding: '0 50px', marginTop: '64px' }">
      <router-view />
      </a-layout-content>
    <a-layout-footer>{{$t(`title.home`)}}</a-layout-footer>
  </a-layout>
  <div @click="change('zh-cn')">中文</div>
  <div @click="change('en-us')">English</div>
  <!-- <a-page-header
      style="border: 0px solid rgb(235, 237, 240)"
      title="enable"
      sub-title="This is a subtitle"
      @back="() => null"
    /> -->

  
</template>
<script>
import { getCurrentInstance } from "vue";
// import { useI18n } from 'vue-i18n'


export default {
  name: 'App',
  data(){
    return {
      menus:this.$router.getRoutes()
    }
  },
  created(){
    console.log(this.$router.getRoutes())
  },
  setup(){
    const { proxy } = getCurrentInstance()
    function change(type){
      proxy.$i18n.locale = type
    }
    return { change }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
