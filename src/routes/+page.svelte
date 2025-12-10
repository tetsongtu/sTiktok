<script>
	import video from '$lib/assets/dance.mp4';
	const users = [
		[
			{ icon: 'O', label: 'Profile' },
			{ icon: 'O', label: '120.8K' },
			{ icon: 'O', label: '1480' },
			{ icon: 'O', label: '6866' },
			{ icon: 'O', label: '7446' }
		],
		[
			{ icon: 'O', label: 'Profile2' },
			{ icon: 'O', label: '98.3K' },
			{ icon: 'O', label: '1200' },
			{ icon: 'O', label: '5400' },
			{ icon: 'O', label: '6500' }
		]
	];
</script>

{#each users as user}
	<div class="h-screen aspect-[9/16] snap-start">
		<div class="relative bg-gray-100 w-full">
			<div class="h-screen p-14 sm:p-4 relative">
				<video
					class="h-full object-cover rounded-2xl cursor-pointer"
					loop
					autoplay
					muted
					src={video}
				></video>
			</div>
			<div
				id="ActionButton"
				class="absolute flex flex-col gap-1.5
			bottom-10 sm:bottom-0 right-0 sm:-right-10"
			>
				{#each user as item}
					<div class="flex flex-col items-center gap-0.5">
						<span
							class="size-10 md:size-12 font-bold text-3xl
							rounded-full bg-gray-200 cursor-pointer
							flex items-center justify-center"
						>
							{item.icon}
						</span>

						<span class="text-sm font-bold text-gray-600 select-none">
							{item.label}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/each}
