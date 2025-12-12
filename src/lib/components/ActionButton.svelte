<script lang="ts">
	import { commentOpen } from '$lib/stores/comment';
	export let data;

	const users = [
		{ icon: 'O', label: data.user.nickname },
		{ icon: 'O', label: data.likes_count },
		{ icon: 'O', label: data.comments_count, type: 'comment' },
		{ icon: 'O', label: 'bookmark' },
		{ icon: 'O', label: data.shares_count }
	];

	function handleCommentClick() {
		commentOpen.update((open) => !open);
	}
</script>

<div
	class="absolute bottom-0 right-0 translate-x-full
	       flex flex-col bg-black/50"
>
	<div class="absolute bottom-0 left-2 flex flex-col gap-2">
		{#each users as item}
			<div class="flex flex-col items-center gap-0.5">
				<button
					class="size-10 md:size-12 font-bold text-3xl
						   rounded-full bg-gray-200 cursor-pointer
						   flex items-center justify-center"
					on:click={item.type === 'comment' ? handleCommentClick : undefined}
				>
					{item.icon}
				</button>

				<span class="text-sm font-bold text-gray-600 select-none">
					{item.label}
				</span>
			</div>
		{/each}
	</div>
</div>
