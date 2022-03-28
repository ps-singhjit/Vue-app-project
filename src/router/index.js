import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import UserListComp from '@/components/UserListComp'
import VuexUserListComp from '@/components/Vuex/VuexUserListComp'
import VuexRegisterComp from '@/components/Vuex/VuexRegisterComp'
import VuexAuthComp from '@/components/Vuex/VuexAuthComp'
import VuexGreetingsComp from '@/components/Vuex/VuexGreetingsComp'
// import CounterComp from '@/components/CounterComp'
import VuexCounterComp from '@/components/Vuex/VuexCounterComp'
import VuexEmployeeComp from '@/components/Vuex/VuexEmployeeComp'

import HomeComp from '@/components/HomeComp'
import VuexUserDetailsComp from '@/components/Vuex/VuexUserDetailsComp'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'HomeComp',
    component: HomeComp,
  },
  {
    path: '/register',
    name: 'RegisterComp',
    component: VuexRegisterComp,
  },
  {
    path: '/users',
    name: 'UserListComp',
    component: VuexUserListComp,
  },
  {
    path: '/users/:userId',
    name: 'UserDetailsComp',
    component: VuexUserDetailsComp,
  },
  {
    path: '/login',
    name: 'AuthComp',
    component: VuexAuthComp,
  },
  {
    path: '/greet',
    name: 'GreetingsComp',
    component: VuexGreetingsComp,
  },
  {
    path: '/counter',
    name: 'CounterComp',
    component: VuexCounterComp,
  },
  {
    path: '/employees',
    name: 'EmployeeComp',
    component: VuexEmployeeComp,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
