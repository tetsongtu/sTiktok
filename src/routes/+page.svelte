<script lang="ts">
	import { onMount } from 'svelte';
	import { activeVideoId } from '$lib/stores/activeVideo';
	import { commentOpen } from '$lib/stores/comment';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { useAutoPlay } from '$lib/actions/useAutoPlay';
	import { infiniteScroll } from '$lib/actions/infiniteScroll';
	import { loadNextVideoBatch } from '$lib/services/videoService';
	import { type VideoData } from '$lib/api/fetchVideo';

	let videos: VideoData[] = [];
	let isLoading = false;

	const loadVideos = async () => {
		if (isLoading) return;
		isLoading = true;
		videos = await loadNextVideoBatch(videos, 5, 109);
		isLoading = false;
	};

	onMount(loadVideos);

	// Cập nhật URL theo video active và trạng thái comment
	$: if ($activeVideoId) {
		const video = videos.find((v) => v.id === $activeVideoId);
		if (video) {
			const url = $commentOpen ? `/@${video.user.nickname}/video/${video.id}` : '/';
			if (window.location.pathname !== url) history.replaceState(null, '', url);
		}
	}
</script>

{#each videos as video, i (video.id)}
	<div class="min-h-screen snap-start p-24 sm:p-4">
		<div class="relative h-full aspect-[9/16]">
			<video
				class="h-full w-full object-cover rounded-2xl cursor-pointer"
				data-video-id={video.id}
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
