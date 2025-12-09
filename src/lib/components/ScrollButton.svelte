<script lang="ts">
	const btns = [-1, 1];

	function scrollTarget() {
		return document.getElementById('MainContent');
	}

	function scroll(dir: number) {
		scrollTarget()?.scrollBy({
			top: dir * window.innerHeight,
			behavior: 'smooth'
		});
	}
</script>

<div class="fixed flex flex-col gap-4 right-4 top-1/2 -translate-y-1/2">
	{#each btns as dir}
		<button
			on:click={() => scroll(dir)}
			class="size-12 flex items-center justify-center
            rounded-full bg-gray-100 cursor-pointer font-bold text-xl"
		>
			O
		</button>
	{/each}
</div>
