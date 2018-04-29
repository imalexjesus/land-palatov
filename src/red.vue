<template>
	<div class="red">
		<h1 class="uk-text-success">Спасибо за Ваш заказ!</h1>
		<p class="">Ожидайте письмо с ссылкой для просмотра видеокурса. Если у Вас есть вопросы задайте мне их на почту <a href="mailto:info@ppc-start.info" @click="clickMail1">info@ppc-start.info</a>. Приятного обучения!</p>
	</div>
</template>

<script>
	export default {
		name: 'Red',
		methods: {
			clickMail1 () {
				this.$ga.event('email', 'click')
			}
		}
	}
</script>

<style scoped>
	.red {
		height: calc(100vh - 80px*2);
		padding: 40px;
	}
</style>