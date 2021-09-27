import { createApp } from 'vue' 
import App from './App.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import { createI18n } from 'vue-i18n' 
import en from './common/lang/en-us'
import zh from './common/lang/zh-cn'


const i18n = createI18n({
  locale: 'zh-cn',
  messages: {
    'en-us': en,
    'zh-cn': zh
  }
})


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name:"home", component: home },
    {path: '/about', name:"about", component: about}
  ]
})

const app = createApp(App,i18n)

app.config.productionTip = false
app.use(router)
app.use(Antd)
app.use(i18n)

app.mount('#app')
