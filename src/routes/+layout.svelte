<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<Header />
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		padding: 0 96px 48px 96px;
		margin: 0 auto;
		max-width: 1440px;
	}

	@media (max-width: 1200px) {
		main {
			padding: 0 24px 24px 24px;
		}
	}
</style>
