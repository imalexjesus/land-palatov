<template>
	<section class="l-section section-prefooter">
		<div class="l-section-inner l-section-inner--row">
			<div class="section-prefooter__col section-prefooter__col-title">
				<h2 class="c-section-h3 c-section-h3--small-margin">
					<span class="c-section-h3--white"><small>Готовы начать получать клиентов из интернета?</small></span>
					<span class="c-section-h3--orange">Приступайте к обучению прямо сейчас!</span>
				</h2>

				<h2 class="c-section-h3 c-section-h3--small-margin">
					<span class="c-section-h3--white"><small>Видеокурс по контекстной рекламы</small></span>
					<span class="c-section-h3--orange">Google Adwords</span> <span class="c-section-h3--white"><small>Стоимость курса - 1200 грн.</small></span>
				</h2>
			</div>

			<div class="section-prefooter__col section-prefooter__col-form">
				<input class="c-section-input" type="text" placeholder="Ваше имя">
				<input class="c-section-input" type="email" placeholder="Ваш e-mail">
				<input class="c-section-input" type="tel" placeholder="Ваш телефон">

				<button class="c-section-button">Приступить к обучению</button>
				<a href="#" class="c-section-link-at-button">Условия покупки</a>
			</div>
		</div>
	</section>

	<!--	<div id="modal-example" uk-modal="" class="uk-modal uk-open" style="display: block;">
			<div class="uk-modal-dialog uk-modal-body">
				<h2 class="uk-modal-title">Headline</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p class="uk-text-right">
					<button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
					<button class="uk-button uk-button-primary" type="button">Save</button>
				</p>
			</div>
		</div>-->
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
					margin-bottom: 7vh;
				}
			}

			&-form {
				flex: 0 0 270px;

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