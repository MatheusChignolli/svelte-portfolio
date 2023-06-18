<script lang="ts">
	import { t } from '../i18n';
	import AnchorList from './AnchorList.svelte';
</script>

<hr />
<h2 id="projects">{@html $t('projects')}</h2>
<AnchorList
	items={[
		{
			title: $t('toDevs'),
			url: 'https://todevs.app'
		},
		{
			title: $t('rickAndMortyCharacters'),
			url: 'https://rick-and-morty-graphql-rest.netlify.app/'
		},
		{
			title: $t('airportDistanceCalculator'),
			url: 'https://airport-distance-calculator-challenge.netlify.app/'
		},
		{
			title: $t('covid19Report'),
			url: 'https://relatoriocovid19.netlify.app/'
		},
		{
			title: $t('calculatorProject'),
			url: 'https://calculatooooor.netlify.app/'
		}
	]}
/>

<style></style>
