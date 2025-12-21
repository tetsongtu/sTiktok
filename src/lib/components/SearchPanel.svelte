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
	class="fixed left-0 top-0 w-80 h-full border-r border-gray-200 bg-white z-10
	transform transition-transform duration-300 ease-in-out"
	class:-translate-x-full={!search.open}
>
	<h2 class="pl-2">Search</h2>
</side-drawer>
