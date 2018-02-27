<template>
	<section class="l-section section-prefooter">
		<div class="l-section-inner l-section-inner--row">
			<div class="section-prefooter__col section-prefooter__col-title">
				<h2 class="c-section-h3 c-section-h3--small-margin">
					<span class="c-section-h3--white"><small>Готовы начать получать клиентов из интернета?</small></span>
					<span class="c-section-h3--orange">Приступайте к обучению прямо сейчас!</span>
				</h2>

				<h2 class="c-section-h3 c-section-h3--small-margin">
					<span class="c-section-h3--white"><small>Видеокурс по контекстной рекламе</small></span>
					<span class="c-section-h3--orange">Google Adwords</span> <span class="c-section-h3--white"><small>Стоимость курса - 1200 грн.</small></span>
				</h2>
			</div>

			<div class="section-prefooter__col section-prefooter__col-form">
				<input class="c-section-input" type="text" placeholder="Ваше имя">
				<input class="c-section-input" type="email" placeholder="Ваш e-mail">
				<input class="c-section-input" type="tel" placeholder="Ваш телефон">

				<button class="c-section-button">Купить видеокурс</button>
				<a uk-toggle href="#c-modal-usloviya-pokupki" class="c-section-link-at-button">Условия покупки</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'SectionPreFooter'
	}
</script>

<style lang="scss">

	.section-prefooter {
		height: 570px;
		background: url('../assets/section1__img-bg.jpg') center no-repeat;
		color: #FFF;
		background-size: cover;

		&__col {
			display: flex;
			flex-direction: column;

			&-title {
				//flex: 0 0 670px;
				flex: 0 0 750px;

				@media screen and (max-width: 768px) {
					flex: auto;
					//margin-bottom: 7vh;
					margin: 3.5vh 0;
				}
			}

			&-form {
				flex: 0 0 270px;
				margin-top: 18px;

				@media screen and (max-width: 768px) {
					flex: auto;
					align-items: center;
					margin-bottom: 7vh;
				}

				input {
					margin-bottom: .6em;
				}
			}
		}

	}

</style>