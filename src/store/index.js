import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
  		status: '',
  		token: localStorage.getItem('Authorization') || '',
  		admin : {},
  		user : {}
	},
	mutations: {
		auth_request(state){
	    	state.status = 'loading'
	  	},
	  	auth_success(state, token){
		    state.status = 'success'
		    state.token = token
		    // state.logged = logged
	  	},
	  	auth_error(state){
	    	state.status = 'error'
	  	},
	  	logout(state){
	    	state.status = ''
	    	state.token = ''
	  	},
	},
	actions: {
		//Admin
	  	login({commit}, admin){
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
              const config = {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              };
			  const auth = {
				auth: {
					username: process.env.VUE_APP_BASIC_AUTH_USERNAME, 
					password: process.env.VUE_APP_BASIC_AUTH_PASSWORD
				}
			  }
			  axios.post('/admin/login', admin, auth) //shorthand
	            .then(response => {
					const token = response.data.data.accessToken
	                axios.defaults.headers.common['Authorization'] = token
	                localStorage.setItem('Authorization', token)
	                // const logged = response.data.logged

	                commit('auth_success', token)
	                resolve(response)
	            })
	            .catch(err => {
					console.log(err.response.data[0].message);
	                commit('auth_error')
	                localStorage.removeItem('Authorization')
	                reject(err)
	            })
	        })
	    },

		//User
		loginUser({commit}, user){
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
              const config = {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              };
			  const auth = {
				auth: {
					username: process.env.VUE_APP_BASIC_AUTH_USERNAME, 
					password: process.env.VUE_APP_BASIC_AUTH_PASSWORD
				}
			  }
			  axios.post('/user/login', user, auth) //shorthand
	            .then(response => {
					const tokenUser = response.data.data.accessToken
	                axios.defaults.headers.common['Authorization'] = tokenUser
	                localStorage.setItem('Authorization', tokenUser)
	                // const logged = response.data.logged

	                commit('auth_success', tokenUser)
	                resolve(response)
	            })
	            .catch(err => {
					console.log(err.response.data[0].message);
	                commit('auth_error')
	                localStorage.removeItem('Authorization')
	                reject(err)
	            })
	        })
	    },

	    register({commit}, user){
	    	return new Promise((resolve, reject) => {
	            commit('auth_request')
	            axios({url: '/user/register', data: user, method: 'POST' })
	            .then(response => {
	                const token = response.data.token
	                const logged = response.data.logged
	                localStorage.setItem('Authorization', token)
	                // Add the following line:
	                axios.defaults.headers.common['Authorization'] = token
	                commit('auth_success', token, logged)
	                resolve(response)
	            })
	            .catch(err => {
	                commit('auth_error', err)
	                localStorage.removeItem('Authorization')
	                reject(err)
	            })
	        })
	    },
	  	logout({commit}){
		    return new Promise((resolve, reject) => {
		      	commit('logout')
		      	localStorage.removeItem('Authorization')
		      	delete axios.defaults.headers.common['Authorization']
		      	resolve()
		    })
	  	}
	},
	getters : {
	  isLoggedIn: state => !!state.token,
	  authStatus: state => state.status,
	}
})
