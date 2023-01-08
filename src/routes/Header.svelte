<script lang="ts">
	const links: { title: string; url: string }[] = [
		// {
		// 	title: 'Projetos',
		// 	url: '/projetos'
		// },
		// {
		// 	title: 'Contato',
		// 	url: 'https://google.com'
		// },
		// {
		// 	title: 'Github',
		// 	url: 'https://github.com'
		// }
	];
</script>

<header>
	<h5>Matheus Chignolli</h5>
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
</header>

<style>
	header {
		display: flex;
		padding: 12px 96px;
		max-width: var(--page-max-width);
		align-items: center;
		margin-bottom: 24px;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--color-primary-main);
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
		font-size: 18px;
	}

	header ul li a {
		color: var(--color-text);
	}

	@media (max-width: 1200px) {
		header {
			padding: 12px 24px;
		}
	}
</style>
