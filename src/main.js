import { createApp } from 'vue' 
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import home from './components/home.vue'
import about from './components/about.vue'

import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"




const i18n = createI18n({
  locale: 'zh-cn',
  messages: {
    'en-us': require('@/assets/lang/en-us.json'),
    'zh-cn': require('@/assets/lang/zh-cn.json')
  }
})


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/enable', name: 'enable_NFT', component: home },
    {path: '/get', name: 'get_ET', component: about},
    {path: '/ecosystem', name: 'ecosystem', component: home},
    {path: '/faq', name: 'faq', component: about}
  ]
})

const app = createApp(App)

app.config.productionTip = true
app.use(router)
app.use(Antd)
app.use(i18n)

app.mount('#app')

