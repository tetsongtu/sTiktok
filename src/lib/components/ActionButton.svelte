<script lang="ts">
	import { comment } from '$lib/stores/index.svelte';
	import { type VideoData } from '$lib/api/fetchVideo';
	import { goto } from '$app/navigation';

	export let data: VideoData

	const users = [
		{ icon: 'O', label: data.user.nickname, type: 'profile' },
		{ icon: 'O', label: data.likes_count },
		{ icon: 'O', label: data.comments_count, type: 'comment' },
		{ icon: 'O', label: 'bookmark' },
		{ icon: 'O', label: data.shares_count }
	];

	function gotoProfile() {
		goto(`/profile`);
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
					onclick={item.type === 'profile'
						? gotoProfile
						: item.type === 'comment'
							? () => (comment.open = !comment.open)
							: undefined}
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
