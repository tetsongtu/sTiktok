<script lang="ts">
	import video from '$lib/assets/dance.mp4';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { useAutoPlay } from '$lib/actions/useAutoPlay';

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
	<div class="min-h-screen snap-start p-14 sm:p-4">
		<div class="relative h-full aspect-[9/16]">
			<video
				class="h-full w-full object-cover rounded-2xl cursor-pointer"
				use:useAutoPlay
				loop
				muted
				src={video}
			>
			</video>
			<ActionButton items={user} />
		</div>
	</div>
{/each}
