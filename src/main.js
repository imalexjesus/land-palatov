// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueGtm from 'vue-gtm'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import VueTheMask from 'vue-the-mask'

import '@/styles/_reboot.scss'
import 'font-awesome/scss/font-awesome.scss'
import '@/styles/uikit-loader.scss'
import '@/styles/style.scss'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

Vue.use(VueGtm, {
	debug: true // Whether or not display console logs debugs (optional)
})
Vue.use(VeeValidate)
Vue.use(VueTheMask)

Vue.config.productionTip = true

var base = '/'

if (location.pathname && location.pathname !== '/') {
	base = location.pathname.split('/').slice(0, -1).join('/')
}

const router = new VueRouter({
	base,
	mode: 'history',
	history: true,
	linkActiveClass: 'uk-active'
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
