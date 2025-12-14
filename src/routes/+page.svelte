<script lang="ts">
	import { onMount } from 'svelte';
	import { activeVideo, comment, reset } from '$lib/stores/index.svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { useAutoPlay } from '$lib/actions/useAutoPlay';
	import { infiniteScroll } from '$lib/actions/infiniteScroll';
	import { loadNextVideoBatch } from '$lib/services/videoService';
	import { type VideoData } from '$lib/api/fetchVideo';
	import ScrollButton from '$lib/components/ScrollButton.svelte';
	import CommentPanel from '$lib/components/CommentPanel.svelte';

	let videos: VideoData[] = $state([]);
	let isLoading = $state(false);

	const loadVideos = async () => {
		if (isLoading) return;
		isLoading = true;
		videos = await loadNextVideoBatch(videos, 5, 109);
		isLoading = false;
	};

	onMount(loadVideos);

	const reloadHomeFeed = () => {
		videos = [];
		loadVideos();
		reset.value = false;
	};

	const syncCommentUrl = () => {
		const video = videos.find((v) => v.id === activeVideo.id);
		if (!video) return;

		const url = comment.open ? `/@${video.user.nickname}/video/${video.id}` : '/';

		if (window.location.pathname !== url) {
			history.replaceState(null, '', url);
		}
	};

	$effect(() => {
		if (reset.value) reloadHomeFeed();

		if (!activeVideo.id) return;
		syncCommentUrl();
	});
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

<div class="z-10 fixed top-0 right-0 flex h-screen pointer-events-none">
	<ScrollButton />
	<CommentPanel />
</div>
