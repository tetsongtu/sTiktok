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

<div class="relative right-4 hidden md:flex flex-col justify-center gap-4 font-bold text-xl">
	{#each btns as dir}
		<button
			on:click={() => scroll(dir)}
			class="size-12 rounded-full bg-gray-100 cursor-pointer pointer-events-auto"
		>
			O
		</button>
	{/each}
</div>
