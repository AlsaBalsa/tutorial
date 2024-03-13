<script lang="ts">
	import '../app.css';

	import { pages, title } from '$lib';

	import MainLayout from '$lib/layouts/MainLayout.svelte';
</script>

<MainLayout {pages} {title}>
	<slot />
</MainLayout>
