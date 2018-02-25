// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import '@/styles/_reboot.scss'
import '@/styles/uikit-loader.scss'
import '@/styles/style.scss'
import 'font-awesome/scss/font-awesome.scss'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

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

UIkit.scrollspy('.l-section', {
	cls: 'uk-animation-slide-left',
	target: '.c-section-h2',
	// closest: '.c-section-h2',
	delay: 700,
	repeat: true
})

UIkit.scrollspy('.c-square-list', {
	cls: 'uk-animation-scale-down',
	target: '> .c-square-list__item',
	// closest: '> .c-square-list__item',
	delay: 500,
	repeat: true
})
