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

			<form class="section-prefooter__col section-prefooter__col-form" @submit.prevent="submitForm">
				<div class="uk-margin-small-bottom uk-text-center">
					<input v-validate="'required|alpha'"
							class="c-section-input"
							:class="{'input': true,'c-section-input--success': fields.name && fields.name.valid, 'c-section-input--danger': errors.has('name') }"
							id="section-prefooter__form-name"
							name="name"
							v-model="postName"
							type="text"
						placeholder="Ваше имя*">
					<div v-show="errors.has('name')" class="c-modal__form-text-danger">{{ errors.first('name') }}</div>
				</div>

				<div class="uk-margin-small-bottom uk-text-center">
					<input v-validate="'required|email'"
							class="c-section-input"
							:class="{'input': true,'c-section-input--success': fields.email && fields.email.valid, 'c-section-input--danger': errors.has('email') }"
							id="section-prefooter__form-email"
							name="email"
							v-model="postEmail"
							type="email"
						placeholder="Ваш e-mail*">
					<div v-show="errors.has('email')" class="c-modal__form-text-danger">{{ errors.first('email') }}</div>
				</div>

				<div class="uk-margin-small-bottom uk-text-center">
					<input v-validate="'required|numeric'"
							class="c-section-input"
							:class="{'input': true,'c-section-input--success': fields.phone && fields.phone.valid, 'c-section-input--danger': errors.has('phone') }"
							id="section-prefooter__form-phone"
							name="phone"
							v-model="postPhone"
							type="tel"
						placeholder="Ваш телефон*">
					<div v-show="errors.has('phone')" class="c-modal__form-text-danger">{{ errors.first('phone') }}</div>
				</div>


				<a
					class="c-section-button"
					:class="{'c-section-button--disabled': errors.any() }"
					@click.prevent="submitForm ()">Купить видеокурс</a>
				<!-- <button class="c-section-button" :disabled="errors.any()">Купить видеокурс</button> -->
				<a uk-toggle href="#c-modal-usloviya-pokupki" class="c-section-link-at-button">Условия покупки</a>
			</form>
		</div>
	</section>
</template>

<script>
	import russian from 'vee-validate/dist/locale/ru'
	import axios from 'axios'

	export default {
		name: 'SectionPreFooter',
		data: () => ({
			postName: '',
			postEmail: '',
			postPhone: ''
		}),
		methods: {
			submitForm () {
				this.$validator.validateAll().then(res => {
					if (res) {
						// Native form submission is not yet supported
						axios.post('/send_mail.php', 'page_title=Получить консультацию (форма в префутере)' +
							'&name=' +
							this.postName +
							'&email=' +
							this.postEmail +
							'&phone=' +
						this.postPhone).then((res) => {
							alert('Form successfully submitted! RESPONSE RECEIVED: ', res)
							console.log('RESPONSE RECEIVED: ', res)
						}).catch((err) => {
							alert('AXIOS ERROR: ', err)
							console.log('AXIOS ERROR: ', err)
						})
						window.location('https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTc2ODk1NDM1MzkzIiwiYW1vdW50IjoiNSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNC+0Lkg0YLQvtCy0LDRgCIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1In0=&signature=RLwj8Q+f9y5FAQq28HuOHewkmAE=')
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
					// margin-bottom: 7vh;
					// margin: 3.5vh 0;
					padding: 2vh 0 4vh;
				}
			}

			&-form {
				flex: 0 0 270px;
				margin-top: 18px;

				@media screen and (max-width: 768px) {
					flex: auto;
					align-items: center;
					padding:  0 0 4vh;
				}

				input {
					// margin-bottom: .6em;
				}

				.c-modal__form-text-danger {
					margin-top: 3px;
				}
			}
		}

	}

</style>
