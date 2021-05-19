import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wallet from '../views/Wallet.vue'
import Receive from '../views/Receive.vue'
import Send from '../views/Send.vue'
import Addresses from '../views/Addresses.vue'
import Utxo from '../views/Utxo.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wallet',
    alias: '/dashboard',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/wallet/receive',
    name: 'Receive',
    component: Receive
  },
  {
    path: '/wallet/send',
    name: 'Send',
    component: Send
  },
  {
    path: '/addresses',
    name: 'Addresses',
    component: Addresses
  },
  {
    path: '/utxo',
    name: 'Utxo',
    component: Utxo
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
