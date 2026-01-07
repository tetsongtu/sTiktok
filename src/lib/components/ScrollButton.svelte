<script lang="ts">
	import Button from './Button.svelte';

	const btns = [-1, 1];

	function scrollTarget() {
		return document.getElementById('MainContent');
	}

	function scroll(dir: number) {
		console.log(dir);
		scrollTarget()?.scrollBy({
			top: dir * window.innerHeight,
			behavior: 'smooth'
		});
	}
</script>

<div class="relative right-4 hidden md:flex flex-col justify-center gap-4 font-bold text-xl">
	{#each btns as dir}
		<Button onClick={() => scroll(dir)} circle rounded>O</Button>
	{/each}
</div>
