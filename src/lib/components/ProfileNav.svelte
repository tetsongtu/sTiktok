<script lang="ts">
	import { goto } from '$app/navigation';
	import { hoverPlay } from '$lib/actions/hoverPlay';

	export let video: string;
	export let nickname: string;
	export let videoId: number;
	type Tab = 'videos' | 'liked';

	let activeTab: Tab = 'videos';
	let indicatorLeft = 0;
	let indicatorWidth = 0;
	let activeTabElement: HTMLElement;

	const tabs: { key: Tab; label: string }[] = [
		{ key: 'videos', label: 'Videos' },
		{ key: 'liked', label: 'Liked' }
	];

	function moveIndicator(el: HTMLElement) {
		indicatorLeft = el.offsetLeft;
		indicatorWidth = el.offsetWidth;
	}

	function updateIndicator(el: HTMLElement, tab: Tab) {
		activeTab = tab;
		activeTabElement = el;
	}

	function resetIndicator() {
		moveIndicator(activeTabElement);
	}

	// 👇 action để lấy element active lúc mount
	function tabAction(node: HTMLElement, tab: Tab) {
		if (tab === activeTab) {
			activeTabElement = node;
			moveIndicator(node);
		}
	}
</script>

<div class="flex flex-col gap-6">
	<div class="flex justify-between border-b border-gray-200">
		<div class="relative flex">
			{#each tabs as tab}
				<button
					class="px-12 cursor-pointer"
					class:font-semibold={activeTab === tab.key}
					use:tabAction={tab.key}
					on:pointerenter={(e) => moveIndicator(e.currentTarget)}
					on:pointerleave={() => resetIndicator()}
					on:click={(e) => updateIndicator(e.currentTarget, tab.key)}
				>
					<span>O</span>
					<span>{tab.label}</span>
				</button>
			{/each}

			<div
				class="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
				style="left:{indicatorLeft}px; width:{indicatorWidth}px"
			></div>
		</div>

		<div class="flex bg-gray-200 rounded-md p-0.5 mb-1.5">
			{#each ['Latest', 'Popular', 'Oldest'] as item}
				<button class="px-3 py-1 font-semibold hover:bg-white rounded-sm">
					{item}
				</button>
			{/each}
		</div>
	</div>

	<div class="flex flex-wrap gap-4 gap-y-6">
		{#if activeTab === 'videos'}
			{#each Array(1) as _}
				<video
					on:click={() => goto(`/@${nickname}/video/${videoId}`)}
					class="w-49 h-65 rounded-xl object-cover cursor-pointer"
					use:hoverPlay
					muted
					src={video}
				></video>
			{/each}
		{:else}
			<div>❤️ Liked videos</div>
		{/if}
	</div>
</div>
