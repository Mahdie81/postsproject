import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import('../views/login/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/register.vue')

    },
    {
      path: '/eachpost/:id',
      name: 'eachpost',
      component: () => import('../views/posts/eachpost/eachpost.vue')

    },
    {
      path: '*',
      name: '404',
      component: () => import('../views/404.vue')

    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('../views/register/register.vue')

    // },

    
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
