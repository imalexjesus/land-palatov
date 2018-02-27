<template>
	<div id="app">
		<Header />
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section5 />
		<Section6 />
		<SectionPreFooter />
		<Footer />
		<!--<router-view></router-view>-->
		<ModalKonsultaciya class="c-modal" />
		<ModalKupitVideokurs class="c-modal" />
		<ModalUsloviyaPokupki class="c-modal" />
		<ModalUroki />

		<!--<div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas">
			&lt;!&ndash; мобильное меню &ndash;&gt;
			<div class="uk-offcanvas-bar">
				<div class="uk-panel">
					<ul class="uk-nav uk-nav-default tm-nav">
						&lt;!&ndash;<li class="uk-nav-header">Главная</li>&ndash;&gt;
						<router-link class="nav-item" tag="li" to="/" exact>
							<a class="navbar__list__item">Главная</a>
						</router-link>
						<router-link class="nav-item" tag="li" to="/podrobnee-o-produkcii" exact>
							<a class="navbar__list__item">О продукции</a>
						</router-link>
					</ul>
				</div>
			</div>
		</div>-->
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import Section1 from '@/components/Section1'
	import Section2 from '@/components/Section2'

	const Section3 = () => import('@/components/Section3')
	const Section4 = () => import('@/components/Section4')
	const Section5 = () => import('@/components/Section5')
	const Section6 = () => import('@/components/Section6')
	const SectionPreFooter = () => import('@/components/SectionPreFooter')
	const Footer = () => import('@/components/Footer')

	const ModalKonsultaciya = () => import('@/components/modals/ModalKonsultaciya')
	const ModalKupitVideokurs = () => import('@/components/modals/ModalKupitVideokurs')
	const ModalUsloviyaPokupki = () => import('@/components/modals/ModalUsloviyaPokupki')
	const ModalUroki = () => import('@/components/modals/ModalUroki')

	export default {
		name: 'app',
		components: {
			Header,
			Section1,
			Section2,
			Section3,
			Section4,
			Section5,
			Section6,
			SectionPreFooter,
			Footer,
			ModalKonsultaciya,
			ModalKupitVideokurs,
			ModalUsloviyaPokupki,
			ModalUroki
		}
	}
</script>
