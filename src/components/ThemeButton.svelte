<script>
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import preferences from '../stores/preferences';

	const { theme } = get(preferences);

	const onDarkMode = () => {
		window.document.body.classList.toggle('dark-mode');

		preferences.update(({ theme: storedTheme }) => ({ theme: storedTheme === 'dark' ? 'light' : 'dark' }));
	};

	onMount(() => {
		if (theme === 'dark') {
			window.document.body.classList.toggle('dark-mode');
		}
	});
</script>

{#key theme}
	<button id="theme-button" on:click={onDarkMode}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			version="1.1"
		>
			<title>ic_fluent_dark_theme_24_regular</title>
			<desc>Created with Sketch.</desc>
			<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="ic_fluent_dark_theme_24_regular" fill="#212121" fill-rule="nonzero">
					<path
						d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
					/>
				</g>
			</g>
		</svg></button
	>
{/key}

<style>
	button {
		color: var(--color-primary-font);
		padding: 4px;
		max-width: 32px;
		max-height: 32px;
		border-radius: 8px;
		background-color: var(--color-primary-dark);
	}

	button svg {
		width: 100%;
		height: 100%;
	}

	button svg path {
		fill: var(--color-primary-text);
	}
</style>
