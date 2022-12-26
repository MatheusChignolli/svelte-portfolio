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
			libs: [
				{
					info: 'AWS',
					list: [
						'S3',
						'IAM',
						'CDKs',
						'Lambda',
						'AppSync',
						'Cognito',
						'DynamoDB',
						'AppConfig',
						'CloudWatch',
						'SecretManager'
					]
				}
			]
		},
		{
			principal: 'CI',
			libs: [
				'Jest',
				'Cypress',
				'Flows tests',
				'Test coverage',
				'Github Actions',
				'React testing library'
			]
		},
		{
			principal: 'CD',
			libs: ['Heroku', 'Vercel', 'Netlify', 'AWS AppSync', 'Github Actions']
		}
	];
</script>

<svelte:head>
	<title>Portfólio - Matheus Chignolli</title>
	<meta name="description" content="Portfólio - Matheus Chignolli" />
</svelte:head>

<section>
	<h1>
		<b>Matheus Chignolli</b> <br />
		<b>Desenvolvedor Front-end</b>
	</h1>
	<p>
		Gosto de resolver problemas, enfrentar desafios e poder colaborar com o conhecimento que tenho,
		além de aprender e conhecer muitas coisas que ainda não tive contato.
	</p>
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
</section>

<style>
	section {
		padding: 0px;
		color: var(--color-text);
	}

	section ul {
		margin: 0;
		padding-left: 20px;
		list-style-type: none;
	}

	section ul.technologies-list {
		padding: 18px;
		border-radius: 4px;
		width: fit-content;
		border: 2px solid var(--color-theme-2);
	}

	section ul.technologies-list b {
		color: var(--color-theme-1);
	}

	section > ul ul {
		list-style-type: '→ ';
	}

	section p {
		font-size: 18px;
		max-width: 50%;
		text-align: justify;
	}

	section h1 b:nth-of-type(1) {
		color: var(--color-theme-1);
	}

	section h1 b:nth-of-type(2) {
		color: var(--color-theme-2);
	}

	section h2 {
		font-size: 1.5rem;
		margin: 48px 0 12px 0;
		color: var(--color-theme-1);
	}

	@media (max-width: 1200px) {
		section {
			width: 100%;
		}

		section h1 {
			font-size: 1.5rem;
		}

		section p {
			max-width: 100%;
		}
	}
</style>
