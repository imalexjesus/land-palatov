<template>
	<section class="l-section section6">
		<div class="l-section-inner l-section-inner--column">
			<h2 class="c-section-h2 c-section-h2--small-margin"><span class="c-section-h2--orange">Об авторе</span> видеокурса</h2>

			<div class="l-section-inner l-section-inner--row">

				<div class="section6__col section6__col-video">
					<img class="u-outline-orange" src="../assets/section6__img-author.jpg" alt="Дмитрий Палатов">
				</div>

				<div class="section6__col section6__col-info">
					<h3 class="c-section-h3"><span class="c-section-h3--orange">Дмитрий Палатов</span></h3>

					<p class="section6__col-info-text">Сертифицированный специалист по контекстной рекламе. Опыт работы с контекстной рекламой более 5 лет. Основная специализация - настройка и оптимизация контекстной рекламы, аналитика трафика, аудит рекламных аккаунтов. Спикер на различных конференциях, посвященных привлечению платного трафика и повышению уровня продаж для различных сфер бизнеса. Главный жизненный девиз: “Не делать рекламу ради рекламы”</p>
				</div>

			</div>

		</div>
	</section>
</template>

<script>
	export default {
		name: 'Section6'
	}
</script>

<style lang="scss">

	.section6 {
		height: 650px;
		color: #FFF;

		&__col {
			display: flex;
			flex-direction: column;

			&-info {
				//flex: 0 0 670px;
				flex: 0 0 610px;

				@media screen and (max-width: 768px) {
					flex: auto;
					margin-bottom: 7vh;
				}
			}

			&-info-text {
				margin-bottom: 3.5em;
				color: $body-color;

				@media screen and (max-width: 768px) {
					margin: 0;
				}
			}

			&-video {
				flex: 0 0 470px;

				@media screen and (max-width: 768px) {
					flex: auto;
					margin-bottom: 7vh;
				}
			}
		}

	}

</style>