<script lang="ts">
	import { pages } from '$lib';
</script>

<div class="grid md:grid-cols-2 grid-cols-1 grid-flow-row justify-items-center w-1/2 mx-auto p-3">
	{#each pages as { title }}
		<div class="p-2">
			<div class="h-56 w-36 bg-gradient-to-tr from-red-300 to-green-300 p-2"></div>
			<p class="w-full text-center p-2">{title}</p>
		</div>
	{/each}
</div>

<div class="h-96"></div>
<div class="h-96"></div>
