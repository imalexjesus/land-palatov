<template>
	<header class="c-footer l-section">
		<div class="c-footer__inner l-section-inner">
			<a href="/" class="c-footer__logo"></a>

			<img src="../assets/cards.svg" alt="Mastercard and VISA" class="uk-visible@m c-cards">

			<div class="c-footer__emails uk-visible@m">
				<i class="fa fa-envelope-o c-footer__icon" aria-hidden="true"></i>
				<div class="c-footer__emails-list">
					<a href="mailto:info@ppc-start.info" @click="clickMail">info@ppc-start.info</a>
				</div>
			</div>

			<div class="c-footer__phones uk-visible@m">
				<i class="fa fa-phone c-footer__icon" aria-hidden="true"></i>
				<div class="c-footer__phones-list">
					<a href="tel:380634819393" @click="clickPhone">+38 (063) 481 93 93</a>
				</div>
			</div>

			<a href="#c-modal-konsultaciya"  @click="clickKonsult" class="c-button" uk-toggle>Консультация</a>
		</div>

	</header>
</template>

<script>
	export default {
		name: 'Footer',
		methods: {
			clickMail () {
				this.$ga.event('email', 'click')
			},
			clickPhone () {
				this.$ga.event('phone', 'click')
			},
			clickKonsult () {
				this.$ga.event('question', 'click')
			}
		}
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
		}

		&__logo:hover {
			background: url('../assets/logo--white.png') center no-repeat;
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
			}
		}

		&__phones-list,
		&__emails-list {
			display: flex;
			flex-direction: column;
			margin-left: 12px;

			@media screen and (max-width: 768px) {
			}
		}

	}

</style>
