<script lang="ts">
	import ProfileNav from '$lib/components/ProfileNav.svelte';
</script>

<div class="ml-71 w-[78.5%] mt-5 mx-auto flex flex-col gap-6">
	<div id="ProfileHeader" class="flex items-center gap-6">
		<div
			class="flex items-center justify-center size-54
	rounded-full bg-gray-200 cursor-pointer"
		>
			O
		</div>

		<div class="flex flex-col gap-2">
			<div>Name</div>

			<div class="flex gap-2">
				<button
					class="w-full p-1.5 bg-rose-500 rounded-lg
				text-white text-lg font-semibold cursor-pointer
				hover:bg-rose-600"
				>
					Follow
				</button>
				<button class="bg-gray-200 p-1.5 rounded-lg font-semibold">Message</button>
				<button class="bg-gray-200 px-3 rounded-lg font-semibold">O</button>
				<button class="bg-gray-200 px-3 rounded-lg font-semibold">O</button>
				<button class="bg-gray-200 px-3 rounded-lg font-semibold">...</button>
			</div>

			<div class="flex gap-2">
				<div>
					<span>9</span>
					<span>Following</span>
				</div>
				<div>
					<span>30.3K</span>
					<span>Followers</span>
				</div>
				<div>
					<span>318.6K</span>
					<span>Likes</span>
				</div>
			</div>

			<div>Description</div>
		</div>
	</div>

	<ProfileNav />
</div>
