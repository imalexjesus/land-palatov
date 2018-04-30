<template>
	<div>
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section5 />
		<Section6 />
		<SectionPreFooter />
	</div>
</template>

<script>
	import Section1 from './components/Section1'
	import Section2 from './components/Section2'
	/*	const Section3 = () => import('@/components/Section3')
	 const Section4 = () => import('@/components/Section4')
	 const Section5 = () => import('@/components/Section5')
	 const Section6 = () => import('@/components/Section6') */
	const SectionPreFooter = () => import('./components/SectionPreFooter')

	export default {
		name: 'DefContent',
		components: {
			Section1,
			Section2,
			Section3: () => import('./components/Section3'),
			Section4: () => import('./components/Section4'),
			Section5: () => import('./components/Section5'),
			Section6: () => import('./components/Section6'),
			SectionPreFooter
		}
	}
</script>

<style scoped>

</style>