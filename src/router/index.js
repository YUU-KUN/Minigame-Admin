import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// auth admin
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'

// layout
import Sidebar from '../views/layouts/Sidebar'

// admin
import Dashboard from '../views/Dashboard'
import User from '../views/User'
import Game from '../views/Game'
import AddNewGame from '../views/GameAdd'
import GameDetail from '../views/GameDetail'
import EditGame from '../views/GameEdit'
import Code from '../views/Code'
import Transaction from '../views/Transaction'
import CobaUploadImage from '../views/cobaUploadImage'
import CobaInput from '../views/CobaInputImage'

Vue.use(VueRouter)

const routes = [

  // admin
  {
    path: '/tes',
    name: 'CobaUploadImage',
    components: {default:CobaUploadImage, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editGame/:gameId',
    name: 'EditGame',
    components: {default:EditGame, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addNewGame',
    name: 'AddNewGame',
    components: {default:AddNewGame, sidebar:Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gameDetail/:gameId',
    name: 'GameDetail',
    components: {default:GameDetail, sidebar:Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    components: {login:Login}
  },
  {
    path: '/transactions',
    name: 'Transaction',
    components: {default: Transaction, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/games',
    name: 'Game',
    components: {default: Game, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/codes',
    name: 'Code',
    components: {default: Code, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'User',
    components: {default: User, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    components: {default: Dashboard, sidebar: Sidebar},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'UploadImage',
    component: CobaInput
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
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  }
  else {
    next() 
  }
})

export default router
