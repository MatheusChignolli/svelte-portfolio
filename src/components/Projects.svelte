<script lang="ts">
	import AnchorList from './AnchorList.svelte';

	const items = [
		{
			title: 'To devs - Gerador de documentos e dados para desenvolvimento e teste de software',
			url: 'https://todevs.app'
		},
		{
			title: 'Rick and Morty characters - Listagem de personagens do desenho Rick and Morty utilizando REST e GraphQl',
			url: 'https://relatoriocovid19.netlify.app/'
		},
		{
			title:
				'Calculadora de distância entre aeroportos - Aplicação para calcular distância entre aeroportos do mundo através de milhas náuticas',
			url: 'https://airport-distance-calculator-challenge.netlify.app/'
		},
		{
			title: 'Relatório covid 19 - Aplicação listando dados do Covid-19',
			url: 'https://relatoriocovid19.netlify.app/'
		}
	];
</script>

<hr />
<h2 id="projects">Projetos</h2>
<AnchorList {items} />

<style></style>
