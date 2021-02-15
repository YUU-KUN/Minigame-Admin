import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// auth
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'

// layout
import Sidebar from '../views/layouts/Sidebar'
import SidebarUser from '../views/layouts/SidebarUser'

// admin
import Dashboard from '../views/admin/Dashboard'
import User from '../views/admin/User'
import Game from '../views/admin/Game'
import AddNewGame from '../views/admin/AddNewGame'
import GameDetail from '../views/admin/GameDetail'
import EditGame from '../views/admin/EditGame'
import Code from '../views/admin/Code'
import Transaction from '../views/admin/Transaction'
import CobaUploadImage from '../views/admin/cobaUploadImage'

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
    path: '/tes',
    name: 'CobaUploadImage',
    components: {default:CobaUploadImage, sidebar: Sidebar}
  },
  {
    path: '/editGame/:gameEdit',
    name: 'EditGame',
    components: {default:EditGame, sidebar: Sidebar}
  },
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
  mode: 'history',
  routes
})

export default router
