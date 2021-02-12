import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// auth
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

// layout
import Sidebar from '../views/layouts/Sidebar.vue'
import SidebarUser from '../views/layouts/SidebarUser.vue'

// admin
import Dashboard from '../views/admin/Dashboard.vue'
import User from '../views/admin/User.vue'
import Game from '../views/admin/Game.vue'
import AddNewGame from '../views/admin/AddNewGame.vue'
import GameDetail from '../views/admin/GameDetail.vue'
import Code from '../views/admin/Code.vue'
import Transaction from '../views/admin/Transaction.vue'

// user
import DashboardUser from '../views/user/DashboardUser'
import TransactionUser from '../views/user/TransactionUser'
import Cart from '../views/user/Cart'
import GameDetailUser from '../views/user/GameDetailUser'
import JoinGame from '../views/user/JoinGame'

// game
import theTempleOfRiddle from '../views/game/theTempleOfRiddle'

Vue.use(VueRouter)

const routes = [

  // user
  {
    path: `/user/theTempleOfRiddle`,
    name: 'theTempleOfRiddle',
    component: theTempleOfRiddle
  },
  {
    path: `/user/joinGame`,
    name: 'JoinGame',
    component: JoinGame
  },
  {
    path: `/user/gameDetail/:gameId`,
    name: 'GameDetailUser',
    components: {default:GameDetailUser, sidebar:SidebarUser}
  },
  {
    path: '/user/',
    name: 'DashboardUser',
    components: {default:DashboardUser, sidebar:SidebarUser}
  },
  {
    path: '/user/transaction',
    name: 'TransactionUser',
    components: {default:TransactionUser, sidebar:SidebarUser}
  },
  {
    path: '/user/cart',
    name: 'Cart',
    components: {default:Cart, sidebar:SidebarUser}
  },

  // admin
  {
    path: '/addNewGame',
    name: 'AddNewGame',
    components: {default:AddNewGame, sidebar:Sidebar}
  },
  {
    path: '/gameDetail/:gameDetail',
    name: 'GameDetail',
    components: {default:GameDetail, sidebar:Sidebar}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/transactions',
    name: 'Transaction',
    components: {default: Transaction, sidebar: Sidebar}
  },
  {
    path: '/games',
    name: 'Game',
    components: {default: Game, sidebar: Sidebar}
  },
  {
    path: '/codes',
    name: 'Code',
    components: {default: Code, sidebar: Sidebar}
  },
  {
    path: '/users',
    name: 'User',
    components: {default: User, sidebar: Sidebar}
  },
  {
    path: '/',
    name: 'Dashboard',
    components: {default: Dashboard, sidebar: Sidebar}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
  routes
})

export default router
