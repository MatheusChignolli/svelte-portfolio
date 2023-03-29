<script lang="ts">
	export let items: { title: string; url: string }[];
</script>

{#if !!items?.length}
	<ul>
		{#each items as { title, url }}
			<li>
				<a href={url} target="_blank" rel="noreferrer">
					{title}
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	li + li {
		margin-top: 8px;
	}

	li a {
		color: var(--color-primary-text);
		padding: 8px;
		display: flex;
		box-shadow: 0px 1px 2px 0px var(--color-primary-dark);
		transition: 0.5s;
		align-items: center;
		border-radius: 8px;
		justify-content: start;
		background-color: var(--color-primary-main);
	}

	li a:hover {
		transition: 0.5s;
		box-shadow: 0px 1px 2px 0px var(--color-primary-main);
		background-color: var(--color-primary-dark);
	}
</style>
