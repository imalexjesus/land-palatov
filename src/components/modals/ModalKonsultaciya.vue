<template>
	<div id="c-modal-konsultaciya" uk-modal>
		<div class="uk-modal-dialog uk-margin-auto-vertical">
			<button class="uk-modal-close-default" type="button" uk-close></button>

			<form class="c-modal__form uk-form-stacked" @submit.prevent="submitForm">
				<h2 class="c-section-h2 c-section-h2--small-margin">
					<span class="c-section-h2--orange">консультация</span></h2>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="form-s-text">Ваше имя</label>
					<div class="uk-inline">
						<span class="uk-form-icon" uk-icon="icon: user"></span>
						<input class="uk-input" id="form-s-text" type="text" placeholder="Ваше имя">
					</div>
				</div>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="form-s-email">Ваш e-mail</label>
					<div class="uk-inline">
						<span class="uk-form-icon" uk-icon="icon: mail"></span>
						<input v-validate="'required|email'" :class="{'input': true, 'uk-form-danger': errors.has('email') }" name="email" class="uk-input" type="email" placeholder="name@domain.com">

					</div>
					<div v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</div>
				</div>

				<div class="uk-margin-top">
					<label class="uk-form-label" for="form-s-tel">Ваш телефон</label>
					<div class="uk-inline">
						<span class="uk-form-icon" uk-icon="icon: receiver"></span>
						<input class="uk-input" id="form-s-tel" type="tel" placeholder="+38 555 123456">
					</div>
				</div>

				<button class="uk-button uk-button-primary uk-margin-top" :disabled="errors.any()">Получить консультацию</button>
				<!--		<input class="c-section-input" type="text" placeholder="Ваше имя">
						<input class="c-section-input" type="email" placeholder="Ваш e-mail">
						<input class="c-section-input" type="tel" placeholder="Ваш телефон">

				<button class="c-section-button">Получить консультацию</button>-->
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModalKonsultaciya',
		methods: {
			submitForm () {
				this.$validator.validateAll().then(res => {
					if (res) {
						alert('Form successfully submitted!')
					} else {
						alert('Please correct all error!')
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>