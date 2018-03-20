<template>
	<header class="c-header l-section">
		<div class="c-header__inner l-section-inner">
			<a href="/" class="c-header__logo"></a>
			<div class="c-header__emails uk-visible@m">
				<a href="mailto:info@ppc-start.com.ua" @click="clickMail"><i class="fa fa-envelope-o c-header__icon" aria-hidden="true"></i></a>
				<div class="c-header__emails-list">
<<<<<<< HEAD
					<a href="mailto:info@ppc-start.info">info@ppc-start.info</a>
=======
					<a href="mailto:info@ppc-start.com.ua" @click="clickMail">info@ppc-start.com.ua</a>
>>>>>>> d68f62e5fd38e33e2519f821b3f4a73efc9ae001
				</div>
			</div>
			<div class="c-header__phones uk-visible@m">
				<i class="fa fa-phone c-header__icon" aria-hidden="true"></i>
				<div class="c-header__phones-list">
					<a href="tel:380634819393" @click="clickPhone">+38 (063) 481 93 93</a>
				</div>
			</div>

			<a href="#c-modal-konsultaciya" class="c-button" uk-toggle>Консультация</a>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		methods: {
			clickMail () {
				this.$gtm.trackEvent({
					event: 'event', // Event type [default = 'interaction'] (Optional)
					category: 'email',
					action: 'click',
					label: 'clickmail'
				})
			},

			clickPhone () {
				this.$gtm.trackEvent({
					event: 'event', // Event type [default = 'interaction'] (Optional)
					category: 'phone',
					action: 'click',
					label: 'clickphone'
				})
			}
		}
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
				justify-content: space-between;
			}
		}

		&__logo {
			display: block;
			width: 170px;
			height: 54px;
			background: url('../assets/logo--black.png') center no-repeat;
			margin-right: auto;

			@media screen and (max-width: 768px) {
				//margin: 5px 10px 5px auto;
				margin: 5px 0;
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
				margin: 0;
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
			width: 105px !important;
			font-size: 0.8em !important;
			margin-left: 0 !important;
			line-height: 1.4 !important;
			display: inline-flex !important;
			justify-content: center !important;
			align-items: center !important;
		}

	}

</style>