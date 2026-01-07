<script lang="ts">
	import { type VideoData } from '$lib/api/fetchVideo';
	import { createVideoActions } from '$lib/utils/actions';

	export let data: VideoData;
	$: actions = createVideoActions(data);
</script>

<div
	class="absolute bottom-0 right-0 translate-x-full
	       flex flex-col bg-black/50"
>
	<div class="absolute bottom-0 left-2 flex flex-col gap-2">
		{#each actions as item}
			<div class="flex flex-col items-center gap-0.5">
				<button
					class="size-10 md:size-12 rounded-full bg-gray-200
			       flex items-center justify-center cursor-pointer"
					onclick={item.onClick}
				>
					{#if item.type === 'profile'}
						<img src={data.user.avatar} alt="" class="size-full rounded-full object-cover" />
					{:else}
						<svelte:component this={item.icon} class="size-6 text-gray-800" />
					{/if}
				</button>

				<span class="text-sm font-bold text-gray-600 select-none">
					{item.label}
				</span>
			</div>
		{/each}
	</div>
</div>
