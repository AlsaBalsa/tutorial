<script lang="ts">
	import type { LinkSection } from '$lib';
	import NavPopover from './NavPopover.svelte';

	export let pages: LinkSection[];
	export let title: string;
</script>

<header class="bg-gradient-to-r from-red-300 to-lime-200">
	<h1 class="text-center text-2xl">
		<a href="/">{title}</a>
	</h1>

	<nav class="grid grid-rows-1 justify-items-center grid-flow-col">
		{#each pages as page}
			<NavPopover {...page} />
		{/each}
	</nav>
</header>
