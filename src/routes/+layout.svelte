<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
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
		height: 100%;
		margin: 0 auto;
		display: flex;
		padding: 0 24px;
		max-width: var(--page-max-width);
		box-sizing: border-box;
		flex-direction: column;
	}
</style>
