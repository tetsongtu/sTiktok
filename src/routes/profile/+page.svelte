<script lang="ts">
</script>

<div class="ml-52 w-[77%] mt-5 flex flex-col gap-6">
	<div id='ProfileHeader' class="flex items-center gap-6">
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

	<div id='ProfileNav' class="relative flex justify-between">
		<div class="flex">
			<div class="px-12 hover:border-b cursor-pointer">
				<span>O</span>
				<span>Videos</span>
			</div>
			<div class="px-12 hover:border-b cursor-pointer">
				<span>O</span>
				<span>Liked</span>
			</div>
		</div>
		<div class="flex bg-gray-200 rounded-md p-0.5">
			<button class="px-3 py-1 font-semibold hover:bg-white rounded-sm">Latest</button>
			<button class="px-3 py-1 font-semibold hover:bg-white rounded-sm">Popular</button>
			<button class="px-3 py-1 font-semibold hover:bg-white rounded-sm">Oldest</button>
		</div>
		<div class="absolute top-0 left-0 w-full border-b border-gray-200 mt-10"></div>
	</div>
</div>
