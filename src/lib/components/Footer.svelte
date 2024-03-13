<script lang="ts">
	import type { LinkSection } from '$lib';

	export let pages: LinkSection[];
	export let title: string;
</script>

<div class="bg-gradient-to-r from-red-300/80 via-amber-300/85 via-60% to-lime-200/80 bg-black h-fit pb-28">
	<div class="p-2 w-fit">
		<h2 class="text-center text-3xl text-gray-50 w-2/3 p-3 font-semibold tracking-wide">
			<a href="/">{title}</a>
		</h2>

		<div class="flex justify-items-center flex-grow w-fit bg-yellow-200/15 rounded-lg">
			{#each pages as { title: headerTitle, links }}
				<nav class="m-1">
					<h3 class="text-gray-50 m-3 text-lg border-gray-50 border-b min-w-24 text-left pl-3">
						{headerTitle}
					</h3>

					{#each links as { title: linkTitle, href }}
						<a {href} class="text-gray-50 flex m-3 mx-4 text-sm flex-grow">{linkTitle}</a>
					{/each}
				</nav>
			{/each}
		</div>
	</div>
</div>
