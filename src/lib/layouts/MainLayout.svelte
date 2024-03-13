<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import type { LinkSection } from '$lib';

	export let pages: LinkSection[];
	export let title: string;
</script>

<Header {pages} {title} />

<slot />

<Footer {pages} {title} />
