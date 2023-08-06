<script lang="ts">
	import { t } from '../i18n';
	import AnchorList from './AnchorList.svelte';
	import NextSectionButton from './NextSectionButton.svelte';
</script>

<hr />
<section id="projects">
	<h2>{@html $t('projects')}</h2>
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
	<NextSectionButton section="articles" />
</section>

<style>
	section#projects {
		padding: 24px 0 0 0;
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
