<script lang="ts">
	import { t } from '../i18n';
	import AnchorList from './AnchorList.svelte';

	const items = [
		{
			title: 'Mock no desenvolvimento web com React — MSW, GraphQl e REST',
			url: 'https://how.base39.works/mock-no-desenvolvimento-web-com-react-msw-graphql-e-rest-6dc7062207fc'
		},
		{
			title: 'A área da tecnologia para super leigos',
			url: 'https://medium.com/@matheuschignolli/a-%C3%A1rea-da-tecnologia-para-quem-n%C3%A3o-a-conhece-913d0abd50a1'
		}
	];
</script>

<hr />
<h2 id="articles">{@html $t('articles')}</h2>
<AnchorList {items} />

<style></style>
