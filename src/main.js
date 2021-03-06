// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAnalytics from 'vue-analytics'
// import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import VueTheMask from 'vue-the-mask'

import '@/styles/_reboot.scss'
import 'font-awesome/scss/font-awesome.scss'
import '@/styles/uikit-loader.scss'
import '@/styles/style.scss'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

Vue.use(VueAnalytics, {
	id: ['UA-115815270-1']
})
Vue.use(VeeValidate)
Vue.use(VueTheMask)

Vue.config.productionTip = true

// Vue.use(VueRouter)
/* var base = '/'
if (location.pathname && location.pathname !== '/') {
	base = location.pathname.split('/').slice(0, -1).join('/')
} */
/* const router = new VueRouter({
	base,
	mode: 'history',
	history: true,
	linkActiveClass: 'uk-active'
//	base: __dirname,
//	routes: [
//		{ path: '/', component: App },
//		{ path: '/red', component: Red }
//	]
}) */

/* eslint-disable no-new */
new Vue({
	// BaseVue,
	// template: '<router-view></router-view>'
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})
