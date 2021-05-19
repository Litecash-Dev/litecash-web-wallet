import Vue from 'vue'
import Vuex from 'vuex'
import dummData from '@/assets/dummy-data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 10000000,
    inProgress: {
      receiving: 1,
      sending: 0,
      maturing: 0,
    },
    onlineStatus: 'online', // offline....
    addresses: dummData.addresses,
    contacts: dummData.contacts,
    transactions: dummData.transactions,
    utxo: dummData.utxo,
    settings: {
      remoteNodeAddress: 'explorer.lite-cash.com:10000',
      lockscreenDuration: 30,
      transactionPasswordPrompt: true,
      walletPassword: 'aaaaa',
      localNode: 'local-node', // local-node or peer
      localNodePort: 10005,
    }
  },
  mutations: {
    SET_REMOTE_ADDRESS (state, val) {
      state.settings.remoteNodeAddress = val;
    },
    SET_WALLET_PASSWORD (state, val) {
      state.settings.walletPassword = val;
    },
    SET_LOCAL_NODE (state, val) {
      state.settings.localNode = val;
    },
    SET_LOCAL_NODE_PORT (state, val) {
      state.settings.localNodePort = val;
    },
    SET_LOCKSCREEN_DURATION (state, val = 30) {
      state.settings.lockscreenDuration = val;
    },
    SET_TRANSACTION_PASSWORD_PROMPT (state, bool = true) {
      state.settings.transactionPasswordPrompt = bool;
    },
    SET_ALL_SETTINGS (state, obj) {
      state.settings = { ...obj }
    },
  },
  actions: {
  },
  modules: {
  }
})
