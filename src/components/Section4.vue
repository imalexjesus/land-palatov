<template>
	<section class="l-section section4" uk-scrollspy="target: > div > div > .c-square-list__item; cls: uk-animation-slide-left; delay: 500">
		<div class="l-section-inner l-section-inner--column">
			<h2 class="c-section-h2">Какие <span class="c-section-h2--orange"> знания и умения вы получите</span></h2>

			<div class="c-square-list">
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<i class="fa fa-sitemap"></i>
					</div>
					<div class="c-square-list__item-text">Настраивать рекламные кампании</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<i class="fa fa-money"></i>
					</div>
					<div class="c-square-list__item-text">Оптимизировать платный трафик</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<i class="fa fa-users"></i>
					</div>
					<div class="c-square-list__item-text">Контролировать подрядчиков (рекламные агентства, фрилансеры)</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<i class="fa fa-line-chart"></i>
					</div>
					<div class="c-square-list__item-text">Выжимать больше конверсий (обращений) из рекламы</div>
				</div>
				<div class="c-square-list__item">
					<div class="c-square-list__item-square">
						<i class="fa fa-check-circle"></i>
					</div>
					<div class="c-square-list__item-text">Существенно экономить бюджет не уменьшая эффективности</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Section4'
	}
</script>

<style lang="scss">

	.section4 {
		height: 650px;
	}

	.section4 .c-square-list__item-text {
		font-size: 14px;
		width: 180px;

		@media screen and (max-width: 768px) {
			//width: 140px !important;
			font-size: 0.8em !important;
		}
	}

</style>
