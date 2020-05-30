import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Chooser2 from '../views/Chooser2.vue'
import WatchMe from '../views/WatchMe.vue'
import Start from '../views/Start.vue'
import Aboutus from '../views/Aboutus.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/chooser2',
    name: 'Chooser2',
    component: Chooser2
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: Aboutus
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/WatchMe/:id',
    name: 'WatchMe',
    component: WatchMe,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
