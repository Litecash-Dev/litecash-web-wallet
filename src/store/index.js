import Vue from 'vue'
import Vuex from 'vuex'
import dummData from '@/assets/dummy-data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    onlineStatus: 'online', // offline....
    addresses: dummData.addresses,
    contacts: dummData.contacts,
    transactions: dummData.transactions,
    utxo: dummData.utxo,
    settings: {
      remoteNodeAddress: 'explorer.lite-cash.com:10000'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
