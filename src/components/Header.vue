<template>
	<header class="c-header l-section">
		<div class="c-header__inner l-section-inner">
			<a uk-navbar-toggle-icon href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon"></a>

			<a href="/" class="c-header__logo"></a>
			<div class="c-header__emails">
				<i class="fa fa-envelope-o c-header__icon" aria-hidden="true"></i>
				<div class="c-header__emails-list">
					<a href="mailto:info@ppc-start.com.ua">info@ppc-start.com.ua</a>
				</div>
			</div>
			<div class="c-header__phones">
				<i class="fa fa-phone c-header__icon" aria-hidden="true"></i>
				<div class="c-header__phones-list">
					<a href="tel:380634819393">+38 (063) 481 93 93</a>
				</div>
			</div>

			<a href="#c-modal-konsultaciya" class="c-button" uk-toggle>Получить консультацию</a>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style lang="scss">

	.c-header {
		height: 80px;
		background-color: $color-orange;

		&__inner {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: center;

			@media screen and (max-width: 768px) {
				flex-flow: row nowrap !important;
			}
		}

		&__logo {
			display: block;
			width: 170px;
			height: 54px;
			background: url('../assets/logo--black.png') center no-repeat;
			margin-right: auto;

			@media screen and (max-width: 768px) {
				margin: 5px 10px 5px auto;
			}

			&:hover {
				background: url('../assets/logo--white.png') center no-repeat;
			}
		}

		&__icon {
			width: 48px !important;
			height: 48px !important;
			background: #252525;
			color: #ffffff;
			font-size: 2rem !important;
			display: inline-flex !important;
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

	@media screen and (max-width: 768px) {
		.c-button {
			display: none;
		}

	}

</style>