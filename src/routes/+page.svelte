<script lang="ts">
	import { onMount } from 'svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { useAutoPlay } from '$lib/actions/useAutoPlay';
	import { infiniteScroll } from '$lib/actions/infiniteScroll';
	import { loadNextVideoBatch } from '$lib/services/videoService';
	import { type VideoData } from '$lib/api/fetchVideo';

	let videos: VideoData[] = [];
	let isLoading = false;

	// Fetch video
	const loadVideos = async () => {
		if (isLoading) return;
		isLoading = true;

		videos = await loadNextVideoBatch(videos, 5, 109);
		isLoading = false;
	};

	onMount(loadVideos);
</script>

{#each videos as video, i (video.id)}
	<div class="min-h-screen snap-start p-24 sm:p-4">
		<div class="relative h-full aspect-[9/16]">
			<video
				class="h-full w-full object-cover rounded-2xl cursor-pointer"
				use:useAutoPlay
				loop
				muted
				controls
				src={video.file_url}
				use:infiniteScroll={() => {
					if (i === videos.length - 1) void loadVideos();
				}}
			></video>
			<ActionButton data={video} />
		</div>
	</div>
{/each}
