<template>
	<section class="l-section section2" uk-scrollspy="target: > div > div > .c-square-list__item; cls: uk-animation-slide-left; delay: 500">
		<div class="l-section-inner l-section-inner--column">
			<h2 class="c-section-h2">
				<span class="c-section-h2--orange">Преимущества</span> моего видеокурса</h2>

			<div class="c-square-list">
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<img src="../assets/section2__c-square-list-icon1.png" alt="Только практика">
					</div>
					<div class="c-square-list__item-text">Только практика</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<img src="../assets/section2__c-square-list-icon2.png" alt="Никакой воды, все по делу">
					</div>
					<div class="c-square-list__item-text">Никакой воды,	все по делу</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<img src="../assets/section2__c-square-list-icon3.png" alt="Курс на человеческом языке">
					</div>
					<div class="c-square-list__item-text">Курс на человеческом языке</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<img src="../assets/section2__c-square-list-icon4.png" alt="Просто смотри и делай">
					</div>
					<div class="c-square-list__item-text">Просто смотри	и делай</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<img src="../assets/section2__c-square-list-icon5.png" alt="Приятные бонусы">
					</div>
					<div class="c-square-list__item-text">Приятные бонусы</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
	import UIkit from 'uikit'

	export default {
		name: 'Section2'
	}

	UIkit.scrollspy('.c-square-list', {
		cls: 'uk-animation-scale-down',
		target: '> .c-square-list__item',
		// closest: '> .c-square-list__item',
		delay: 400,
		repeat: false
	})
</script>

<style lang="scss">

	.section2 {
		height: 650px;
	}

</style>
