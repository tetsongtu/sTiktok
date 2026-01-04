<script lang="ts">
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import ZoomWarning from '$lib/components/ZoomWarning.svelte';
	import Button from '$lib/components/Button.svelte';

	let { children } = $props();
</script>

<ZoomWarning />
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
			class="h-12 ring-1 ring-gray-100 shadow-md
			rounded-full p-2 flex items-center font-semibold"
		>
			{#each ['Get Coins', 'Get App'] as item}
				<Tooltip className="xl:hidden" content={item}>
					<Button className="gap-1 px-2" rounded>
						<span class="flex size-4 items-center justify-center">O</span>
						<span class="hidden xl:inline"> {item} </span>
					</Button>
				</Tooltip>
			{/each}
			<div class="border-l border-gray-200 h-5 mx-2"></div>
			<Button primary className="px-4.5" rounded>Log in</Button>
		</div>
	</div>
</div>
