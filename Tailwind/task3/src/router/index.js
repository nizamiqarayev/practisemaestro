import Vue from 'vue'
import VueRouter from 'vue-router'
import ForkioMain from '../components/ForkioMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ForkioMain
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
