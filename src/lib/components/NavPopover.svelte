<script lang="ts">
	import type { Link } from '$lib';
	import { createPopover } from 'svelte-headlessui';
	import { Transition } from 'svelte-transition';

	export let title: string;
	export let links: Link[];
    export let debug = false;

	const popover = createPopover();
</script>

<nav on:mouseenter={popover.open} on:mouseleave={popover.close} class="relative justify-items-center mx-auto">
	<h3 class="text-gray-50 m-3 text-lg min-w-24">
		{title}
	</h3>

	<Transition
		show={debug || $popover.expanded}
		enter="transition ease-out duration-200"
		enterFrom="opacity-0 translate-y-1"
		enterTo="opacity-100 translate-y-0"
		leave="transition ease-in duration-150"
		leaveFrom="opacity-100 translate-y-0"
		leaveTo="opacity-0 translate-y-1"
	>
		<ul
			use:popover.panel
			class="bg-gray-300 rounded-md z-10 w-full absolute mt-3"
		>
			{#each links as { href, title: linkTitle }}
				<li class="flex flex-1 my-1 mx-2">
					<a {href}>{linkTitle}</a>
				</li>
			{/each}
		</ul>
	</Transition>
</nav>
