<template>
	<header class="c-footer l-section">
		<div class="c-footer__inner l-section-inner">
			<a href="/" class="c-footer__logo"></a>
			<div class="c-footer__emails">
				<i class="fa fa-envelope-o c-footer__icon" aria-hidden="true"></i>
				<div class="c-footer__emails-list">
					<a href="mailto:info@ppc-start.com.ua">info@ppc-start.com.ua</a>
				</div>
			</div>
			<div class="c-footer__phones">
				<i class="fa fa-phone c-footer__icon" aria-hidden="true"></i>
				<div class="c-footer__phones-list">
					<a href="tel:380634819393">+38 (063) 481 93 93</a>
				</div>
			</div>
			<a href="#c-modal-konsultaciya" class="c-button" uk-toggle>Получить консультацию</a>
		</div>

	</header>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="scss">

	.c-footer {
		height: 80px;
		background-color: $color-orange;

		&__inner {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: center;
		}

		&__logo {
			display: block;
			width: 170px;
			height: 54px;
			background: url('../assets/logo--black.png') center no-repeat;
			margin-right: auto;

			@media screen and (max-width: 768px) {
				margin: 5px auto;
			}
		}

		&__logo:hover {
			background: url('../assets/logo--white.png') center no-repeat;
		}

		&__icon {
			width: 48px;
			height: 48px;
			background: #252525;
			color: #ffffff;
			font-size: 2rem;
			display: inline-flex;
			justify-content: center;
			align-items: center;
		}

		&__phones,
		&__emails {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			margin-right: 50px;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}

		&__phones-list,
		&__emails-list {
			display: flex;
			flex-direction: column;
			margin-left: 12px;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}

	}

</style>