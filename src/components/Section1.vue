<template>
	<section class="l-section section1">
		<div class="l-section-inner l-section-inner--row">
			<div class="section1__col section1__col-info">
				<h3 class="c-section-h3 c-section-h3--small-margin">
					<span class="c-section-h3--white"><small>Как получать клиентов из интернета</small></span>
					<span class="c-section-h3--orange">Видеокурс по правильной настройке Google Adwords</span>
					<span class="c-section-h3--white"><small>Стоимость курса - 2000 грн.</small></span>
				</h3>
				<p class="section1__col-info-text">Обучающий видеокурс по настройке и оптимизации контекстной рекламы Google Adwords для начинающих пользователей.

					<a href="#" class="uk-hidden@m section1__toggle-btn" uk-toggle="target: .section1__toggle-text; animation: uk-animation-fade">Подробнее</a>

					<span class="section1__toggle-text" hidden>Получите необходимые знания для быстрого запуска эффективных рекламных кампаний и получайте новых клиентов из интернета для себя или своих клиентов. Уже более 100 предпринимателей, маркетологов и специалистов по контекстной рекламе применили полученные знания на практике</span>
					<span class="uk-visible@m">Получите необходимые знания для быстрого запуска эффективных рекламных кампаний и получайте новых клиентов из интернета для себя или своих клиентов. Уже более 100 предпринимателей, маркетологов и специалистов по контекстной рекламе применили полученные знания на практике</span>

				</p>
		<!--		<button class="c-section-button" type="button" uk-toggle="target: #c-modal-kupit-videokurs" @click="clickBuy">Купить видеокурс</button>
				<a uk-toggle href="#c-modal-usloviya-pokupki" class="c-section-link-at-button" @click="clickUsloviyaPokupki">Условия покупки</a>-->
			</div>

<!--			<div class="section1__col section1__col-video">
				<img class="u-outline-orange" src="../assets/section1__img-video.jpg" alt="Видеокурс по базовой настройке прибыльной контекстной рекламы Google Adwords.">
			</div>
	-->
			<form class="section1__col section1__col-form" @submit.prevent="submitForm0">
				<div class="uk-margin-small-bottom uk-text-center">
					<input v-validate="{ required: true, regex: /^[а-яА-ЯёЁa-zA-Z0-9]+$/ }"
						class="c-section-input"
						:class="{'input': true,'c-section-input--success': fields.name && fields.name.valid, 'c-section-input--danger': errors.has('name') }"
						id="section1__form-name"
						name="name"
						autocomplete="name"
						v-model="postName"
						type="text"
						placeholder="Ваше имя*">
					<div v-show="errors.has('name')" class="c-modal__form-text-danger uk-text-center">{{ errors.first('name') }}</div>
				</div>

				<div class="uk-margin-small-bottom uk-text-center">
					<input v-validate="'required|email'"
						class="c-section-input"
						:class="{'input': true,'c-section-input--success': fields.email && fields.email.valid, 'c-section-input--danger': errors.has('email') }"
						id="section1__form-email"
						name="email"
						v-model="postEmail"
						type="email"
						autocomplete="email"
						placeholder="Ваш e-mail*">
					<div v-show="errors.has('email')" class="c-modal__form-text-danger uk-text-center">{{ errors.first('email') }}</div>
				</div>

				<div class="uk-margin-small-bottom uk-text-center">
					<input v-validate="'required|min:15'"
						class="c-section-input"
						:class="{'input': true,'c-section-input--success': fields.phone && fields.phone.valid, 'c-section-input--danger': errors.has('phone') }"
						id="section1__form-phone"
						name="phone"
						v-model="postPhone"
						type="tel"
						autocomplete="tel"
						v-mask="'(0##) ###-##-##'"
						masked="true"
						placeholder="Ваш телефон*">
					<div v-show="errors.has('phone')" class="c-modal__form-text-danger uk-text-center">{{ errors.first('phone') }}</div>
				</div>


				<a	class="c-section-button"
					:class="{'c-section-button--disabled': errors.any() }"
					@click.prevent="submitForm0 ()">Купить видеокурс</a>
				<!-- <button class="c-section-button" :disabled="errors.any()">Купить видеокурс</button> -->
				<a uk-toggle href="#c-modal-usloviya-pokupki" class="c-section-link-at-button uk-text-center">Условия покупки</a>
			</form>
		</div>
	</section>
</template>

<script>
	import russian from 'vee-validate/dist/locale/ru'
	import axios from 'axios'

	export default {
		name: 'Section1',
		data: () => ({
			postName: '',
			postEmail: '',
			postPhone: ''
		}),
		methods: {
		/*			clickBuy () {
				this.$ga.event('buy', 'click')
			},
			clickUsloviyaPokupki () {
				this.$ga.event('terms', 'click')
			}, */
			submitForm0 () {
				this.$validator.validateAll().then(res => {
					if (res) {
						// Native form submission is not yet supported
						axios.post('/send_mail.php', 'page_title=Получить консультацию (форма в секции под шапкой)' +
							'&name=' +
							this.postName +
							'&email=' +
							this.postEmail +
							'&phone=' +
						this.postPhone).then((res) => {
							this.$ga.event('formpay', 'send')
							window.location = 'https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTc2ODk1NDM1MzkzIiwiYW1vdW50IjoiMjAwMCIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNC%2B0Lkg0YLQvtCy0LDRgCIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0%3D&signature=sV5ZyLnzkjj3lkAqkNRhSakVSYM%3D'
							// alert('Form successfully submitted! RESPONSE RECEIVED: ', res)
							console.log('RESPONSE RECEIVED: ', res)
						}).catch((err) => {
							alert('AXIOS ERROR: ', err)
							console.log('AXIOS ERROR: ', err)
						})
					} else {
						// validatoк error
						alert('Please correct all error!')
						event.preventDefault()
					}
				})
			}
		},
		created () {
			this.$validator.localize('ru', {
				messages: russian.messages
			})
		}
	}
</script>

<style lang="scss">

	.section1 {
		height: 570px;
		background: url('../assets/section1__img-bg.jpg') center no-repeat;
		color: #FFF;
		background-size: cover;

		.section1__toggle-btn {
			color: coral;
		}

		&__toggle-text {
			display: block;
		}

		&__col {
			display: flex;
			flex-direction: column;

			&-info {
				//flex: 0 0 670px;
				flex: 0 0 610px;

				@media screen and (max-width: 768px) {
					flex: auto;
					padding: 2vh 0;
					//margin-bottom: 7vh;
					align-items: center;
				}

			}

			&-info-text {
				margin-top: 1vh;
			}

			&-video {
				flex: 0 0 470px;
				justify-content: center;

				@media screen and (max-width: 768px) {
					flex: auto;
					//margin-bottom: 7vh;
					padding:  0 0 4vh;
				}
			}

			&-form {
				flex: 0 0 270px;
				margin-top: 18px;

				@media screen and (max-width: 768px) {
					flex: auto;
					margin-top: 0;
					align-items: center;
					padding:  0 0 4vh;
				}

				.c-modal__form-text-danger {
					margin: 3px auto 0;
				}
			}
		}


	}

</style>
