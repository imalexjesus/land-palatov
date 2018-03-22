<template>
	<section class="l-section section3" uk-scrollspy="target: > div > div > .c-rectangle-list__item; cls: uk-animation-slide-right; delay: 400" uk-parallax="bgx: -200">
		<div class="l-section-inner l-section-inner--column">
			<h2 class="c-section-h2"><span class="c-section-h2--orange">Содержание курса</span></h2>

			<div class="c-rectangle-list">
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok1">УРОК №1</a>
					<div class="c-rectangle-list__item-text">Введение в курс</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok2">УРОК №2</a>
					<div class="c-rectangle-list__item-text">Регистрация аккаунта Google</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok3">УРОК №3</a>
					<div class="c-rectangle-list__item-text">Определение целей и подбор ключевых запросов</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok4">УРОК №4</a>
					<div class="c-rectangle-list__item-text">Создание кампании в поисковой сети</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok5">УРОК №5</a>
					<div class="c-rectangle-list__item-text">Составление расширений объявлений</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok6">УРОК №6</a>
					<div class="c-rectangle-list__item-text">Создание кампании в контекстно-медийной сети (DSK)</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok7">УРОК №7</a>
					<div class="c-rectangle-list__item-text">Создание кампании Ремаркетинг</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok8">УРОК №8</a>
					<div class="c-rectangle-list__item-text">Знакомство с<br /> Google Analytics</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok9">УРОК №9</a>
					<div class="c-rectangle-list__item-text">Базовая оптимизация кампании в поисковой сети</div>
				</div>
				<div class="c-rectangle-list__item">
					<a class="c-rectangle-list__item-rectangle" @click="clickLesson" uk-toggle  href="#c-modal-urok10">УРОК №10</a>
					<div class="c-rectangle-list__item-text">Базовая оптимизация кампании в контекстно-медийной сети</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Section3',
		methods: {
			clickLesson () {
				this.$ga.event('lessons', 'click')
			}
		}

	}
</script>

<style lang="scss">

	.section3 {
		height: 650px;
		background: url('../assets/section3__img-bg.jpg') center no-repeat;
		color: #FFF;
		background-size: cover;
	}

</style>
