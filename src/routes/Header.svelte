<script lang="ts">
	import { t, locale, locales } from '../i18n';
	import ThemeButton from '../components/ThemeButton.svelte';

	const links: { title: string; url: string }[] = [
		// {
		// 	title: 'Tecnologias',
		// 	url: '#technologies'
		// }
	];
</script>

<header>
	<div>
		<h5>{$t('myName')}</h5>
		<select bind:value={$locale}>
			{#each locales as l}
				<option value={l}>{l}</option>
			{/each}
		</select>
		{#if !!links?.length}
			<nav>
				<ul>
					{#each links as { title, url }}
						<li>
							{#if url.includes('http')}
								<a href={url} target="_blank" rel="noreferrer">
									{title}
								</a>
							{:else}
								<a href={url}>{title}</a>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
		<ThemeButton />
	</div>
</header>

<style>
	header {
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: var(--color-primary-main);
	}

	header div {
		width: 100%;
		display: flex;
		padding: 12px 24px;
		max-width: var(--page-max-width);
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}

	header h5 {
		font-size: 1rem;
	}

	header ul {
		gap: 32px;
		margin: 0;
		padding: 0;
		display: flex;
		list-style: none;
		flex-direction: row;
	}

	header ul li {
		font-size: 1rem;
	}

	header select {
		padding: 8px;
		margin-left: auto;
		margin-right: 12px;
		border-radius: 8px;
		background-color: var(--color-primary-dark);
		color: var(--color-primary-text);
		border: none;
		height: 32px;
	}
</style>
