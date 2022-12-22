<script lang="ts">
	export const contacts = [
		{
			title: 'Github',
			info: 'MatheusChignolli',
			url: 'https://github.com/MatheusChignolli'
		},
		{
			title: 'E-mail',
			info: 'matheuschignolli@gmail.com',
			url: 'mailto:matheuschignolli@gmail.com'
		},
		{
			title: 'LinkedIn',
			info: 'matheus-chignolli-a0115b155',
			url: 'https://www.linkedin.com/in/matheus-chignolli-a0115b155/'
		}
	] as const;

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

<div class="content">
	<section>
		<h1>
			Olá! <br />
			Sou <b>Matheus Chignolli</b> <br />
			<b>Desenvolvedor Front-end</b>
		</h1>
		<p>
			Gosto de resolver problemas, enfrentar desafios e poder colaborar com o conhecimento que
			tenho, além de aprender e conhecer muitas coisas que ainda não tive contato 👀
		</p>
		{#if !!technologies?.length}
			<h2>Tecnologias</h2>
			<ul>
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
					{/if}
				{/each}
			</ul>
		{/if}
	</section>
	{#if !!contacts.length}
		<aside>
			<h2>Contato</h2>
			<ul>
				{#each contacts as { url, info, title }}
					<li>
						<b>{title}:</b> <br />
						{info} <br />
						{#if url.includes('http') || url.includes('mailto')}
							<a target="_blank" rel="noreferrer" href={url}> Acessar </a>
						{:else}
							<a target="_blank" rel="noreferrer" href={url}>
								<button>Acessar</button>
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</div>

<style>
	.content {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	section {
		padding: 0px;
		width: 70%;
		color: var(--color-text);
	}

	section ul {
		margin: 0;
		padding-left: 20px;
		list-style-type: none;
	}

	section ul b {
		color: var(--color-theme-1);
	}

	section > ul {
		padding: 18px;
		border-radius: 4px;
		border: 2px solid var(--color-theme-2);
	}

	section > ul ul {
		list-style-type: '→ ';
	}

	section p {
		font-size: 18px;
		max-width: 50%;
		text-align: justify;
	}

	section h1 {
		font-size: 48px;
		margin: 0;
	}

	section h1 b:nth-of-type(1) {
		color: var(--color-theme-1);
	}

	section h1 b:nth-of-type(2) {
		color: var(--color-theme-2);
	}

	section h2 {
		margin: 12px 0;
		color: var(--color-theme-1);
	}

	aside {
		width: 30%;
	}

	aside h2 {
		margin: 12px 0;
		color: var(--color-theme-2);
	}

	aside ul {
		border-radius: 4px;
		padding: 18px;
		margin: 0;
		list-style: none;
		border: 2px solid var(--color-theme-1);
	}

	aside ul li:not(:first-child) {
		margin-top: 12px;
	}

	aside ul b {
		color: var(--color-theme-2);
	}

	aside ul li a {
		padding: 8px;
		border-radius: 4px;
		display: inline-block;
		color: var(--color-text);
		background-color: var(--color-theme-2);
	}

	@media (max-width: 1200px) {
		.content {
			flex-direction: column;
		}

		section {
			width: 100%;
		}

		section h1 {
			font-size: 24px;
		}

		section p {
			max-width: 100%;
		}

		aside {
			width: 100%;
		}
	}
</style>
