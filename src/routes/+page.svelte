<script>
	const items = [
		{ icon: 'O', label: 'Profile' },
		{ icon: 'O', label: '120.8K' },
		{ icon: 'O', label: '1480' },
		{ icon: 'O', label: '6866' },
		{ icon: 'O', label: '7446' }
	];
</script>

<div id="video" class="aspect-[9/16] rounded-2xl snap-start">
	<div class="h-screen p-4 relative">
		<div class="bg-gray-500 h-full rounded-2xl"></div>
		<div
			class="absolute bottom-3.5 -right-13.5
			 flex flex-col gap-1.5"
		>
			{#each items as item}
				<div class="flex flex-col items-center gap-1">
					<button class="cursor-pointer">
						<span
							class="rounded-full bg-gray-200 font-bold text-3xl
							size-12 flex items-center justify-center"
						>
							{item.icon}
						</span>
					</button>
					<span class="select-none text-sm font-bold text-gray-600">{item.label}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
