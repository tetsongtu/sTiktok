<script lang="ts">
	import { onMount } from 'svelte';

	import ProfileNav from '$lib/components/ProfileNav.svelte';
	import { page } from '$app/state';
	import { fetchVideo } from '$lib/api/fetchVideo';
	import { type VideoData } from '$lib/api/fetchVideo';

	let videoId = page.url.searchParams.get('video');

	let data: VideoData | null = null;

	onMount(async () => {
		data = await fetchVideo(Number(videoId));
	});
</script>

<div class="ml-23 lg:ml-71 w-315 mt-5 mx-auto flex flex-col gap-6">
	<div id="ProfileHeader" class="flex items-center gap-6.5">
		<img
			alt=""
			src={data?.user.avatar || ''}
			class="flex items-center justify-center cursor-pointer
				size-54 rounded-full object-cover bg-gray-200
				ring-4 ring-purple-200 shadow-lg"
		/>

		<div class="flex flex-col gap-2">
			<span class="text-xl font-semibold">{data?.user.nickname}</span>

			<div class="flex gap-3">
				<button
					class="p-1.5 w-27 bg-rose-500 rounded-lg
				text-white text-lg font-semibold cursor-pointer
				hover:bg-rose-600"
				>
					Follow
				</button>
				<button class="bg-gray-100 p-1.5 w-27 rounded-lg font-semibold">Message</button>
				<button class="bg-gray-100 px-3 rounded-lg font-semibold">O</button>
				<button class="bg-gray-100 px-3 rounded-lg font-semibold">O</button>
				<button class="bg-gray-100 px-3 rounded-lg font-semibold">...</button>
			</div>

			<div class="flex gap-2">
				<div>
					<span>{data?.user.followings_count || 0}</span>
					<span>Following</span>
				</div>
				<div>
					<span>{data?.user.followers_count || 0}</span>
					<span>Followers</span>
				</div>
				<div>
					<span>{data?.user.likes_count || 0}</span>
					<span>Likes</span>
				</div>
			</div>

			<div>{data?.description}</div>
		</div>
	</div>

	<ProfileNav video={data?.file_url!} />
</div>
