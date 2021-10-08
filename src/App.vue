<template>
  <a-layout
    :style="{ height:'100%'}">
    <a-layout-header
      class="header">
      <a-row justify="space-between">
        <a-col
          class="heading"
          :style="{ display:'flex',justifyContent:'flex-start',alignItems: 'center',alignContent: 'center'}"
          :sm="24"
          :lg="10">
          <h1 class="logo">enable</h1>
          <div
            class="wallet-conaction">
            <a-button
              size="small">{{ $t('buttons.connect_wallet')}}</a-button>
            </div>
          <div
            class="mobileMenuToggle">
            <a-button
              type="text"
              size="small">
              <icon-font
                @click="showMobileMenu"
                :style="{fontSize:'1.2em'}"
                type="icon-more" />
                </a-button>
            </div>
          </a-col>
        <a-col
          :style="{ display:'flex',justifyContent:'flex-end',alignItems: 'center',alignContent: 'center'}"
          :sm="0"
          :lg="14">
          <a-menu
            class="desktopMenu"
            theme="light"
            mode="horizontal"
            @click="handelMenu"
            inlineCollapsed=false
            :style="{ lineHeight: '64px',background: 'transparent'}">
            <a-menu-item v-for="item in menus" :key="item" >
              {{$t('menus.'+item.name)}}
              </a-menu-item>
          </a-menu>
          <a-dropdown class="langDrop">
            <template #overlay>
              <a-menu @click="handleLangChange">
                <a-menu-item key="zh-cn">
                  简体中文
                </a-menu-item>
                <a-menu-item key="en-us">
                  English
                </a-menu-item>
              </a-menu>
            </template>
            <a-button type="text">
              <icon-font
                :style="{fontSize:'1.5em'}"
                type="icon-language" />
            </a-button>
          </a-dropdown>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <router-view class="main"/>
      </a-layout-content>
    <a-layout-footer class="footer">By harker.</a-layout-footer>
  </a-layout>
  <a-drawer
    title=""
    placement="right"
    :closable="false"
    v-model:visible="mobileMenuVisible"
    :after-visible-change="handelMobileMenuChange"
  >
    <a-menu
      class="mobileMenu"
      theme="light"
      mode="vertical"
      @click="handelMobileMenu"
      inlineIndent="16"
      :style="{borderRight:'none'}"
      >
      <a-menu-item v-for="item in menus" :key="item" >
        {{$t('menus.'+item.name)}}
        </a-menu-item>
    </a-menu>
    <languageSwitcher></languageSwitcher>
  </a-drawer>
</template>
<script>
import { getCurrentInstance,ref} from "vue"
import { createFromIconfontCN } from '@ant-design/icons-vue'


export default {
  name: 'App',
  components: {
    IconFont: createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_2842825_cx2alyw5t6v.js',
    }),
    languageSwitcher: {
      name:'languageSwitcher',
      template: `
       <a-dropdown class="langDrop">
        <a-button>English</a-button>
       </a-dropdown>
      `
    }
  },
  props: {
    title: String
  },
  data(){
    return {
      menus:[{
        type: "router",
        name: 'enable_NFT',
        path: '/enable',
        params: null
      },{
        type:"router",
        name: 'get_ET',
        path: '/get',
        params: null
      },{
        type: "router",
        name: 'ecosystem',
        path: '/ecosystem',
        params: null
      },{
        type: "link",
        name: 'faq',
        path: 'http://www.github.com',
        params: null
      }]
    }
  },
  created(){
    let localeType = localStorage.getItem("locale")
    this.changeLocale(localeType)
  },
  setup(){
    const { proxy } = getCurrentInstance()
    const mobileMenuVisible = ref(false)
    function showMobileMenu(){
      mobileMenuVisible.value = true
    }
    function handelMobileMenuChange(e){
      console.log(e)
    }
    function changeLocale(type){
      proxy.$i18n.locale = type
      localStorage.setItem("locale", type);
    }
    return { 
      changeLocale,
      showMobileMenu,
      mobileMenuVisible,
      handelMobileMenuChange
    }
  },
  methods:{
    handelMenu(e){
      console.log('>handelMenu@e.key:',e.key)
      let {type,name,path} = e.key
      switch(type){
        case 'router':
          this.$router.push({ path:path, name:name })
          break
        case 'link':
          window.open( path)
          break
      }
    },
    handleLangChange(e){
      this.changeLocale(e.key)
    },
    handelMobileMenu(e){
      this.handelMenu(e)
      this.mobileMenuVisible = false
    }
  },
}
</script>

<style lang="less" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }
  .icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
  }
  .demo-dropdown-wrap :deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  .logo{
    margin:0 1em 0 0;
    padding:0;
  }
  .header{
    position: fixed; 
    z-index: 1; 
    width: 100%; 
    background: transparent;
    padding: 0 48px;
  }
  .main,.footer{
    padding: 0 48px;
  }
  .mobileMenuToggle{
    display:none;
  }
  //mobile
  @media screen and (max-width:576px) {
    .heading{
      width: 100%;
      justify-content: space-between;
      .logo{
        flex:1
      }
    }
    .header,.main,.footer{
      padding: 0 20px;
    }
    .mobileMenuToggle{
      display: block;
      margin: 0 0 0 1em;
    }
    .langDrop,.desktopMenu{
      display: none;
    }
  }
  //tablet
  @media screen and (min-width:576px) and (max-width:768px) {
    .header,.main,.footer{
      padding: 0 24px;
    }
  }
</style>
