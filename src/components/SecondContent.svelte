<script lang="ts">
	export const technologies: {
		principal: string;
		libs?: ({ info: string; list?: string[] } | string)[];
	}[] = [
		{
			principal: 'Javascript'
		},
		{
			principal: 'Typescript'
		},
		{
			principal: 'React JS',
			libs: [
				{
					info: 'Estilização',
					list: ['Material UI', 'Styled components', 'Tailwind', 'CSS/SCSS/SASS/LESS']
				},
				{
					info: 'Controle de estado',
					list: ['Context API', 'Redux', 'Easy-peasy', 'Zustand', 'Recoil']
				},
				{
					info: 'Comunicação com APIs',
					list: ['React Query/TanStack Query', 'Axios', 'Fetch', 'GraphQl/Apollo']
				},
				{
					info: 'Formulário',
					list: ['React Hook Form', 'Formik']
				},
				{
					info: 'Testes',
					list: ['Jest', 'React testing library', 'Cypress']
				}
			]
		},
		{
			principal: 'Versionamento',
			libs: ['Git', 'Github', 'Bitbucket', 'Gitlab']
		},
		{
			principal: 'Banco de Dados',
			libs: ['MySQL', 'Mongo', 'Postgres']
		},
		{
			principal: 'Cloud',
			libs: ['AWS']
		},
		{
			principal: 'CI',
			libs: ['Jest', 'Cypress', 'Flows tests', 'Test coverage', 'Github Actions', 'React testing library']
		},
		{
			principal: 'CD',
			libs: ['Heroku', 'Vercel', 'Netlify', 'AWS AppSync', 'Github Actions']
		}
	];
</script>

{#if !!technologies?.length}
	<h2>Tecnologias</h2>
	<ul class="technologies-list">
		{#each technologies as { principal, libs }}
			{#if libs?.length}
				<li>
					<b>{principal + (libs?.length ? ': ' : '')}</b>
					{#if libs?.length && typeof libs[0] === 'string'}
						{#each libs as lib, libIndex}
							{(libIndex !== 0 ? ', ' : '') + lib}
						{/each}
					{:else}
						<ul>
							{#each libs as lib}
								{#if typeof lib !== 'string'}
									<li>
										<b>{lib.info + (lib.list?.length ? ': ' : '')}</b>
										{#if !!lib.list?.length}
											{#each lib.list as item, itemIndex}
												{(itemIndex !== 0 ? ', ' : '') + item}
											{/each}
										{/if}
									</li>
								{/if}
							{/each}
						</ul>
					{/if}
				</li>
			{:else}
				<li><b>{principal}</b></li>
			{/if}
		{/each}
	</ul>
{/if}

<style>
	h2 {
		width: fit-content;
		position: relative;
		font-size: 3rem;
		margin-bottom: 96px;
		color: var(--color-primary-text);
	}

	h2::before {
		right: -20px;
		width: 130px;
		height: 150px;
		top: -10px;
		content: '';
		z-index: -1;
		position: absolute;
		border-radius: 8px;
		background-color: var(--color-primary-main);
	}

	h2::after {
		left: -20px;
		width: calc(100% - 60px);
		height: 70px;
		top: 30px;
		content: '';
		z-index: -1;
		position: absolute;
		border-radius: 8px;
		background-color: var(--color-primary-dark);
	}

	ul {
		color: var(--color-primary-text);
		margin: 0;
		padding-left: 20px;
		border-radius: 8px;
		list-style-type: none;
	}

	ul.technologies-list {
		width: fit-content;
		padding: 18px;
	}

	ul.technologies-list li {
		padding: 4px 0;
		font-size: 1.2rem;
	}

	section > ul ul {
		list-style-type: '→ ';
	}
</style>
