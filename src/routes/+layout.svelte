<script lang="ts">
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	let { children } = $props();
</script>

<div class="flex">
	<Sidebar
		className="fixed z-10 pointer-events-none bg-white
		border-r lg:border-r-0 border-gray-200 h-screen"
	/>

	<div
		id="MainContent"
		class="flex-1 flex flex-col items-center
		h-screen overflow-y-auto snap-y snap-mandatory"
	>
		{@render children()}
	</div>

	<div id="Header Action" class="fixed right-6 top-6 text-sm hidden md:block">
		<div
			class="ring-1 ring-gray-100 shadow-md
			rounded-full p-2 flex items-center h-12 font-semibold"
		>
			{#each ['Get Coins', 'Get App'] as item}
				<Tooltip className="xl:hidden" content={item}>
					<button
						class="flex gap-1 items-center cursor-pointer hover:bg-gray-100 rounded-full px-2 h-full"
					>
						<span class="flex size-4 items-center justify-center">O</span>
						<span class="hidden xl:inline"> {item} </span>
					</button>
				</Tooltip>
			{/each}
			<div class="border-l border-gray-200 h-5 mx-2"></div>
			<button
				class="rounded-full bg-rose-500 text-white px-4.5 h-full hover:bg-rose-600 cursor-pointer"
			>
				Log in
			</button>
		</div>
	</div>
</div>
