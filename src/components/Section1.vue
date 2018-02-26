<template>
	<section class="l-section section1">
		<div class="l-section-inner l-section-inner--row">
			<div class="section1__col section1__col-info">
				<h2 class="c-section-h3 c-section-h3--small-margin">
					<span class="c-section-h3--white"><small>Видеокурс</small></span>
					<span class="c-section-h3--orange">по настройке контекстной рекламы Google Adwords</span>
					<span class="c-section-h3--white"><small>Стоимость курса - 1200 грн.</small></span>
				</h2>

				<p class="section1__col-info-text">Обучающий видеокурс по настройке и оптимизации контекстной рекламы Google Adwords для начинающих пользователей. Получите необходимые знания для быстрого запуска эффективных рекламных кампаний и получайте новых клиентов из интернета для себя или своих клиентов. Уже более 100 предпринимателей, маркетологов и специалистов по контекстной рекламе применили полученные знания на практике</p>
				<button class="c-section-button" type="button" uk-toggle="target: #c-modal-kupit-videokurs">Купить видеокурс</button>
				<a href="#" class="c-section-link-at-button">Условия покупки</a>
			</div>

			<div class="section1__col section1__col-video">
				<img class="u-outline-orange" src="../assets/section1__img-video.jpg" alt="Видеокурс по базовой настройке прибыльной контекстной рекламы Google Adwords.">
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Section1'
	}
</script>

<style lang="scss">

	.section1 {
		height: 570px;
		background: url('../assets/section1__img-bg.jpg') center no-repeat;
		color: #FFF;
		background-size: cover;

		&__col {
			display: flex;
			flex-direction: column;

			&-info {
				//flex: 0 0 670px;
				flex: 0 0 610px;

				@media screen and (max-width: 768px) {
					flex: auto;
					margin-bottom: 7vh;
					align-items: center;
				}

			}

			&-info-text {
				margin-bottom: 3.5em;
			}

			&-video {
				flex: 0 0 470px;
				justify-content: center;

				@media screen and (max-width: 768px) {
					flex: auto;
					margin-bottom: 7vh;
				}
			}
		}

	}

</style>
