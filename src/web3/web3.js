const CONTRACT_ADDRESS = '0x83B4184B76f8b74aCaC95Ed4CE049b3AEa4A77cA'
const ABI = require('@/web3/abi.json')

const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)

export{ web3, CONTRACT_ADDRESS,contract,Web3}





