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
		flex-direction: row;
		justify-content: end;
		align-items: center;
		padding: 48px 0px 32px;
	}

	header ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		margin: 0;
		padding: 0;
		gap: 32px;
	}

	header ul li {
		font-size: 18px;
	}

	header ul li a {
		color: var(--color-text);
	}
</style>
