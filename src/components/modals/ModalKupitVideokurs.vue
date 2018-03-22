<template>
	<div id="c-modal-kupit-videokurs" class="uk-flex-top" uk-modal>
		<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
			<button class="uk-modal-close-default" type="button" uk-close></button>

			<form class="c-modal__form uk-form-stacked"	@submit.prevent="submitForm">
				<h2 class="c-section-h2 c-section-h2--small-margin">
					<span class="c-section-h2--orange">Купить видеокурс</span>
				</h2>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="c-modal-kupit-videokurs__form-name">Ваше имя</label>
					<div class="uk-inline">
						<span class="uk-form-icon uk-icon" :class="{'uk-text-danger': errors.has('name') }" uk-icon="icon: user"></span>
						<input v-validate="{ required: true, regex: /^[а-яА-ЯёЁa-zA-Z0-9]+$/ }"
							class="uk-input"
							:class="{'input': true, 'uk-form-danger': errors.has('name') }"
							id="c-modal-kupit-videokurs__form-name"
							name="name"
							autocomplete="name"
							v-model="postName"
							type="text"
						placeholder="Ваше имя">
					</div>
					<div v-show="errors.has('name')" class="c-modal__form-text-danger">{{ errors.first('name') }}</div>
				</div>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="c-modal-kupit-videokurs__form-email">Ваш e-mail</label>
					<div class="uk-inline">
						<span class="uk-form-icon uk-icon" uk-icon="icon: mail" :class="{'uk-text-danger': errors.has('email') }"></span>
						<input v-validate="'required|email'"
							class="uk-input"
							:class="{'input': true, 'uk-form-danger': errors.has('email') }"
							id="c-modal-kupit-videokurs__form-email"
							name="email"
							v-model="postEmail"
							type="email"
							autocomplete="email"
						placeholder="name@domain.com">
					</div>
					<div v-show="errors.has('email')" class="c-modal__form-text-danger">{{ errors.first('email') }}</div>
				</div>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="c-modal-kupit-videokurs__form-phone">Ваш телефон</label>
					<div class="uk-inline">
						<span class="uk-form-icon uk-icon" :class="{'uk-text-danger': errors.has('phone') }" uk-icon="icon: receiver"></span>
						<input v-validate="'required|min:15'"
							class="uk-input"
							:class="{'input': true, 'uk-form-danger': errors.has('phone') }"
							id="c-modal-kupit-videokurs__form-phone"
							name="phone"
							v-model="postPhone"
							type="tel"
							autocomplete="tel"
							v-mask="'(0##) ###-##-##'"
							masked="true"
						placeholder="(044) 123-45-67">
					</div>
					<div v-show="errors.has('phone')" class="c-modal__form-text-danger">{{ errors.first('phone') }}</div>
				</div>

				<button class="uk-button uk-button-primary uk-margin-top"  :disabled="errors.any()">Купить видеокурс</button>
			</form>
		</div>
	</div>
</template>

<script>
	import russian from 'vee-validate/dist/locale/ru'
	import axios from 'axios'

	export default {
		name: 'ModalKupitVideokurs',
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
						axios.post('/send_mail.php', 'page_title=Купить видеокурс' +
							'&name=' +
							this.postName +
							'&email=' +
							this.postEmail +
							'&phone=' +
						this.postPhone).then((res) => {
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
