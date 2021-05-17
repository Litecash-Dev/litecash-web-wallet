import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    addresses: [
      {
        datestamp: '2021-05-15T15:00:00',
        address: 'fdsnifhuisgh9sdsbgksbg',
        expires: 'never',
      },
      {
        datestamp: '2021-05-15T15:00:00',
        address: '5gfdsdnifhuisgh9sdsbgksbg',
        expires: '24h',
      },
      {
        datestamp: '2021-05-15T15:00:00',
        address: '8jfdsnigdgGDggh9sdsbgksbg',
        expires: 'never',
      },
    ],
    transactions: [
      {
        datestamp: '2021-05-15T15:00:00',
        address: 'fdsnifhuisgh9sdsbgksbg',
        status: 'sent',
        amount: 2000
      },
      {
        datestamp: '2021-05-15T15:00:00',
        address: 'fdsnifhuisgh9sdsbgksbg',
        status: 'received',
        amount: 200
      },
      {
        datestamp: '2021-05-15T15:00:00',
        address: 'fdsnifhuisgh9sdsbgksbg',
        status: 'received',
        amount: 200
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
