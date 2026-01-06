<script lang="ts">
	import { search } from '$lib/stores/index.svelte';

	function clickOutside(node: HTMLElement) {
		const handler = (e: MouseEvent) => !node.contains(e.target as Node) && (search.open = false);
		document.addEventListener('click', handler);
		return { destroy: () => document.removeEventListener('click', handler) };
	}
</script>

<side-drawer
	use:clickOutside
	class="
	fixed left-18 top-0 w-80 h-full border-x border-gray-200
	transform translate-all duration-500 ease-in-out bg-white
	{search.open ? 'opacity-100 z-10' : 'opacity-0 z-0 -translate-x-full'}"
>
	<h2 class="pl-2">Search</h2>
</side-drawer>
