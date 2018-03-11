<template>
	<div id="c-modal-konsultaciya" class="uk-flex-top" uk-modal>
		<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
			<button class="uk-modal-close-default" type="button" uk-close></button>

			<form class="c-modal__form uk-form-stacked"
			@submit.prevent="submitForm"
			v-if="showForm">
				<h2 class="c-section-h2 c-section-h2--small-margin">
					<span class="c-section-h2--orange">консультация</span>
				</h2>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="c-modal-konsultaciya__form-name">Ваше имя</label>
					<div class="uk-inline">
						<span class="uk-form-icon uk-icon" :class="{'uk-text-danger': errors.has('name') }" uk-icon="icon: user"></span>
						<input v-validate="'required|alpha'"
							class="uk-input"
							:class="{'input': true, 'uk-form-danger': errors.has('name') }"
							id="c-modal-konsultaciya__form-name"
							name="name"
							v-model="postName"
							type="text"
						placeholder="Ваше имя">
					</div>
					<div v-show="errors.has('name')" class="c-modal__form-text-danger">{{ errors.first('name') }}</div>
				</div>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="c-modal-konsultaciya__form-email">Ваш e-mail</label>
					<div class="uk-inline">
						<span class="uk-form-icon uk-icon" uk-icon="icon: mail" :class="{'uk-text-danger': errors.has('email') }"></span>
						<input v-validate="'required|email'"
							class="uk-input"
							:class="{'input': true, 'uk-form-danger': errors.has('email') }"
							id="c-modal-konsultaciya__form-email"
							name="email"
							v-model="postEmail"
							type="email"
						placeholder="name@domain.com">
					</div>
					<div v-show="errors.has('email')" class="c-modal__form-text-danger">{{ errors.first('email') }}</div>
				</div>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="c-modal-konsultaciya__form-phone">Ваш телефон</label>
					<div class="uk-inline">
						<span class="uk-form-icon uk-icon" :class="{'uk-text-danger': errors.has('phone') }" uk-icon="icon: receiver"></span>
						<input v-validate="'required|numeric'"
							class="uk-input"
							:class="{'input': true, 'uk-form-danger': errors.has('phone') }"
							id="c-modal-konsultaciya__form-phone"
							name="phone"
							v-model="postPhone"
							type="tel"
						placeholder="+38 555 123456">
					</div>
					<div v-show="errors.has('phone')" class="c-modal__form-text-danger">{{ errors.first('phone') }}</div>
				</div>

				<button class="uk-button uk-button-primary uk-margin-top" :disabled="errors.any()">Получить консультацию</button>

			</form>

			<div class="uk-alert-success uk-margin-large uk-margin-medium-left uk-margin-medium-right" v-if="!showForm" uk-alert>
				<h3>Отлично!</h3>
				<p>Форма успешно отправлена</p>
			</div>

		</div>
	</div>
</template>

<script>
	import russian from 'vee-validate/dist/locale/ru'
	import axios from 'axios'

	export default {
		name: 'ModalKonsultaciya',
		data: () => ({
			postName: '',
			postEmail: '',
			postPhone: '',
			showForm: true
		}),
		methods: {
			submitForm () {
				this.$validator.validateAll().then(res => {
					if (res) {
						// Native form submission is not yet supported
						axios.post('/send_mail.php', 'page_title=Получить консультацию' +
							'&name=' +
							this.postName +
							'&email=' +
							this.postEmail +
							'&phone=' +
						this.postPhone).then((res) => {
							this.showForm = false
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
			// this.errors.add('email', 'Newsletter Email is not valid', 'email', 'newsletter')
			// this.errors.add('email', 'Newsletter Email is required', 'required', 'newsletter')
			// this.errors.add('email', 'Email is not a valid email', 'email')
			// this.errors.add('name', 'name is required', 'required')
		}
	}
</script>
