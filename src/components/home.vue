<template>
  <div
    class="container">
    <a-row type="flex">
      <a-col
        :span="24">
        <div 
          :style="{height:'100vh',display:'flex',alignItems: 'center', alignContent: 'center',justifyContent: 'space-around'}">
          <a-typography-title :style="{textTransform:'capitalize'}">{{$t('title.slogan')}}</a-typography-title>
          </div>
        <div>
          <a-button @click="testCallContract">测试合约调用</a-button>
        </div>
      </a-col>
    </a-row>
    </div>
   
</template>

<script>
// import { ref} from "vue"
// import { contract,web3 } from '../web3/web3.js'
// const ABI = require('@/web3/abi.json')
const Web3 = require('web3')
export default {
  name: 'home',
  setup(){
    const web3 = new Web3(Web3.givenProvider)
    return {web3}
  },
  data(){
    return{
      siteName: process.env.VUE_APP_SITE_NAME,
      env: process.env.VUE_APP_MODE,
      url: process.env.VUE_APP_URL
    }
  },
  props: {
    msg: String
  },
  methods:{
    testCallContract(){
      // this.web3.personal.getAccounts().then(console.log)
      console.log(this.web3.eth.accounts)
      // console.log(this.contract.methods.getBalance().call())
      // this.contract.methods.getBalance().call().then(function(res){
      //   console.log(res)
      // })
      // this.contract.methods.getUserTokens('0xaBf802e6F6bB795F6F6fa812def63797C3b36dDa').call().then(function(res){
      //   console.log(res)
      // })
      
      // web3.eth.getAccounts().then(res=>{
      //   console.log(res)
      // })
      // console.log(from)
      // this.contract.methods.deposit().send({ from:'0xaBf802e6F6bB795F6F6fa812def63797C3b36dDa', value: web3.utils.toWei("0.001","ether")}).then(res=>{
      //   console.log(res)
      // })
      // console.log(from)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
