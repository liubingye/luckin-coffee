import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  loginLock:0,
	  nowUser:'',
	  nowGoods:[],
	  nowName:'',
	  addressId:0
  },
  mutations: {
	  unLock(state,phone){
		  state.nowUser = phone;
		  state.loginLock = 1;
	  },
	  Locked(state){
		  state.nowUser = '';
		  state.loginLock = 0;
		  router.push('logorres')
	  }
  },
  actions: {
  },
  modules: {
  }
})
