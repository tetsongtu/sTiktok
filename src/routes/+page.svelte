<script lang="ts">
	import { onMount } from 'svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { useAutoPlay } from '$lib/actions/useAutoPlay';
	import { fetchVideo, type VideoData } from '$lib/api/fetchVideo';
	import { infiniteScrollTrigger } from '$lib/actions/videoObserver';

	let videos: VideoData[] = [];
	let isLoading = false;

	// Lấy random id
	const getUniqueRandomIds = (count: number, max: number, existingIds: Set<number>) => {
		const ids = new Set<number>();
		while (ids.size < count) {
			const id = Math.floor(Math.random() * max) + 1;
			if (!existingIds.has(id)) ids.add(id);
		}
		return [...ids];
	};

	// Fetch video
	const loadNextVideoBatch = async () => {
		if (isLoading) return;
		isLoading = true;

		const existingIds = new Set(videos.map((v) => v.id));
		const batchIds = getUniqueRandomIds(5, 109, existingIds);
		const fetched = await Promise.all(batchIds.map(fetchVideo));
		const newVideos = fetched.filter((v): v is VideoData => !!v && !existingIds.has(v.id));

		videos = [...videos, ...newVideos];
		isLoading = false;
		console.log('Videos fetched:', newVideos);
	};

	onMount(loadNextVideoBatch);
</script>

{#each videos as video, i (video.id)}
	<div class="min-h-screen snap-start p-24 sm:p-4">
		<div class="relative h-full aspect-[9/16]">
			<video
				class="h-full w-full object-cover rounded-2xl cursor-pointer"
				use:useAutoPlay
				loop
				muted
				src={video.file_url}
				use:infiniteScrollTrigger={() => {
					if (i === videos.length - 1) void loadNextVideoBatch();
				}}
			></video>
			<ActionButton data={video} />
		</div>
	</div>
{/each}
