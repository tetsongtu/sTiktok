<script lang="ts">
	import { search } from '$lib/stores/index.svelte';

	function clickOutside(node: HTMLElement) {
		const handler = (e: MouseEvent) => !node.contains(e.target as Node) && (search.open = false);
		document.addEventListener('click', handler, true);
		return { destroy: () => document.removeEventListener('click', handler, true) };
	}
</script>

<side-drawer
	use:clickOutside
	class="fixed left-18 top-0 w-80 h-full border-x border-gray-200
	transform translate-all duration-500 ease-in-out opacity-0 bg-white"
	class:opacity-100={search.open}
	class:z-10={search.open}
	class:-translate-x-full={!search.open}
>
	<h2 class="pl-2">Search</h2>
</side-drawer>
