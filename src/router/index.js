import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListComp from '@/components/UserListComp'
import RegisterComp from '@/components/RegisterComp'
import AuthComp from '@/components/AuthComp'
import GreetingsComp from '@/components/GreetingsComp'
import CounterComp from '@/components/CounterComp'
import HomeComp from '@/components/HomeComp'
import UserDetailsComp from '@/components/UserDetailsComp'

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
    component: RegisterComp,
  },
  {
    path: '/users',
    name: 'UserListComp',
    component: UserListComp,
  },
  {
    path: '/users/:userId',
    name: 'UserDetailsComp',
    component: UserDetailsComp,
  },
  {
    path: '/login',
    name: 'AuthComp',
    component: AuthComp,
  },
  {
    path: '/greet',
    name: 'GreetingsComp',
    component: GreetingsComp,
  },
  {
    path: '/counter',
    name: 'CounterComp',
    component: CounterComp,
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
