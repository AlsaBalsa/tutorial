<script lang="ts">
	import type { LinkSection } from '$lib';

	export let pages: LinkSection[];
	export let title: string;
</script>

<div class="bg-gradient-to-r from-red-300 to-lime-200">
	<h1 class="text-center text-2xl">
		<a href="/">{title}</a>
	</h1>

	<nav class="grid grid-rows-1 justify-items-center grid-flow-col">
		{#each pages as { title: headerTitle, links }}
			<div>
				<h3>{headerTitle}</h3>

				{#each links as { href, title: linkTitle }}
					<a {href}>{linkTitle}</a>
				{/each}
			</div>
		{/each}
	</nav>
</div>
