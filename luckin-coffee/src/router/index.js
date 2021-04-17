import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloApp from '@/views/HelloApp'
import Home from '@/views/Home'
import Order from '@/views/Order'
import Menu from '@/views/Menu'
import Shopcar from '@/views/Shopcar'
import Mine from '@/views/Mine'
import LogOrRes from '@/views/LogOrRes'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Wallet from '@/views/Wallet'
import Coupons from '@/views/Coupons'
import PersonalData from '@/views/PersonalData'
import Settlement from '@/views/Settlement'
import Paying from '@/views/Paying'
import Successpay from '@/views/Successpay'
import Failurepay from '@/views/Failurepay'
import Addresslist from '@/views/Addresslist'
import Setaddress from '@/views/Setaddress'
import Buyway from '@/views/Buyway'
import store from '@/store'

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace= function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalpush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalpush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
 {
	 path:"/",
	 component:HelloApp
 },
 {
 	 path:"/home",
 	 component:Home
 },
 {
 	 path:"/order",
	 name:"Order",
 	 component:Order,
	 beforeEnter: (to, from, next) => {
	       var tokenStr = store.state.loginLock
	      if (to.name !== 'LogOrRes' && !tokenStr) next({ name: 'LogOrRes' })
	      else next()
	 }
 },
 {
 	 path:"/menu",
 	 component:Menu,
 },
 {
 	 path:"/shopcar",
	 name:"Shopcar",
 	 component:Shopcar,
	 beforeEnter: (to, from, next) => {
	       var tokenStr = store.state.loginLock
	      if (to.name !== 'LogOrRes' && !tokenStr) next({ name: 'LogOrRes' })
	      else next()
	 }
 },
 {
 	 path:"/mine",
 	 component:Mine
 },
 {
	 path:"/logorres",
	 name:"LogOrRes",
	 component:LogOrRes
 },
 {
	 path:"/login",
	 component:Login
 },
 {
 	 path:"/register",
 	 component:Register
 },
 {
 	 path:"/wallet",
	 name:"Wallet",
 	 component:Wallet,
	 beforeEnter: (to, from, next) => {
	       var tokenStr = store.state.loginLock
	      if (to.name !== 'LogOrRes' && !tokenStr) next({ name: 'LogOrRes' })
	      else next()
	 }
 },
 {
 	 path:"/coupons",
 	 name:"Coupons",
 	 component:Coupons,
 	 beforeEnter: (to, from, next) => {
 	       var tokenStr = store.state.loginLock
 	      if (to.name !== 'LogOrRes' && !tokenStr) next({ name: 'LogOrRes' })
 	      else next()
 	 }
 },
 {
 	 path:"/personaldata",
 	 component:PersonalData,
 	 beforeEnter: (to, from, next) => {
 	       var tokenStr = store.state.loginLock
 	      if (to.name !== 'LogOrRes' && !tokenStr) next({ name: 'LogOrRes' })
 	      else next()
 	 }
 },
 {
 	 path:"/settlement/:choose",
	 name:'settlement',
 	 component:Settlement
 },
 {
 	 path:"/paying/:id",
	 name:'paying',
 	 component:Paying
 },
 {
 	 path:"/successpay",
	 name:'successpay',
 	 component:Successpay
 },
 {
 	 path:"/failurepay",
	 name:'failurepay',
 	 component:Failurepay
 },
 {
 	 path:"/addresslist",
	 name:'addresslist',
 	 component:Addresslist
 },
 {
 	 path:"/setaddress",
	 name:'setaddress',
 	 component:Setaddress
 },
 {
 	 path:"/buyway",
	 name:'buyway',
 	 component:Buyway
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
