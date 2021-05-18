import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    onlineStatus: 'online', // offline....
    addresses: [
      {
        datecreated: '2021-05-15T15:00:00',
        address: 'fdsnifhuisgh9sdsbgksbg',
        expires: 'never',
        comment: '',
        category: ''
      },
      {
        datecreated: '2021-05-15T15:00:00',
        address: '5gfdsdnifhuisgh9sdsbgksbg',
        expires: '24h',
        comment: '',
        category: ''
      },
      {
        datecreated: '2021-05-15T15:00:00',
        address: '8jfdsnigdgGDggh9sdsbgksbg',
        expires: 'never',
        comment: '',
        category: ''
      },
    ],
    contacts: [
      {
        datecreated: '2021-05-15T15:00:00',
        address: '78fdsnifhuisgh9sdsbgksbg',
        comment: 'DaveS',
        category: ''
      },
      {
        datecreated: '2021-05-15T15:10:00',
        address: '15tggfdsdnifhuisgh9sdsbgksbg',
        comment: 'Jonny',
        category: ''
      },
      {
        datecreated: '2021-05-15T15:15:00',
        address: '8jfdsnigdgGDggh9sdsbgksbg',
        comment: '',
        category: 'Tony'
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
    utxo: [
      {
        amount: 99,
        maturity: 49204,
        status: 'available',
        type: 'regular'
      },
      {
        amount: 96,
        maturity: 39204,
        status: 'available',
        type: 'regular'
      },
      {
        amount: 86,
        maturity: 29204,
        status: 'available',
        type: 'regular'
      }
    ],
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
