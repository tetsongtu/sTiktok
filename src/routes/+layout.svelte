<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex">
	<Sidebar className="fixed pointer-events-none" />
	<div
		class="flex-1 flex flex-col items-center
		h-screen overflow-y-auto snap-y snap-mandatory"
	>
		{@render children()}
		{@render children()}
	</div>
</div>
