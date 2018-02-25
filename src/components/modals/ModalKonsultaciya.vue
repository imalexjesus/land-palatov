<template>
	<div id="c-modal-konsultaciya" uk-modal>
		<div class="uk-modal-dialog uk-margin-auto-vertical">
			<button class="uk-modal-close-default" type="button" uk-close></button>

			<div class="c-modal__form">
				<h2 class="c-section-h2 c-section-h2--small-margin"><span class="c-section-h2--orange">консультация</span></h2>

				<input class="c-section-input" type="text" placeholder="Ваше имя">
				<input class="c-section-input" type="email" placeholder="Ваш e-mail">
				<input class="c-section-input" type="tel" placeholder="Ваш телефон">

				<button class="c-section-button">Получить консультацию</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModalKonsultaciya'
	}
</script>

<style scoped>

</style>