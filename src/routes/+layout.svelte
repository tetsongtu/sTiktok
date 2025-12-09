<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ScrollButton from '$lib/components/ScrollButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex">
	<Sidebar className="fixed pointer-events-none" />

	<div
		id="MainContent"
		class="flex-1 flex flex-col items-center
		h-screen overflow-y-auto snap-y snap-mandatory"
	>
		{@render children()}
		{@render children()}
	</div>

	<div id="Header Action" class="fixed right-6 top-6">
		<div
			class="ring-1 ring-gray-100 shadow-md
			rounded-full p-2 flex items-center h-12 font-semibold"
		>
			{#each ['Get Coins', 'Get App'] as item}
				<button class="cursor-pointer hover:bg-gray-100 rounded-full px-2 h-full">
					<span>O</span>
					<span> {item} </span>
				</button>
			{/each}
			<div class="border-l border-gray-200 h-5 mx-1.5"></div>
			<button
				class="rounded-full bg-rose-500 text-white px-4 h-full hover:bg-rose-600 cursor-pointer"
			>
				Log in
			</button>
		</div>
	</div>

	<ScrollButton />
</div>
