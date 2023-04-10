<script lang="ts">
	import { t } from '../i18n';
	import About from '../components/About.svelte';
	import Articles from '../components/Articles.svelte';
	import Projects from '../components/Projects.svelte';
	import Technologies from '../components/Technologies.svelte';
</script>

<svelte:head>
	<title>{$t('portfolio')} - {$t('myName')}</title>
	<meta name="description" content={`${$t('portfolio')} - ${$t('myName')}`} />
</svelte:head>

<About />
<Technologies />
<Projects />
<Articles />

<style>
</style>
