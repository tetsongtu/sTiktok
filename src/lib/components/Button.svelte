<script lang="ts">
	let { children, className = '', rounded = false, primary = false, text = false } = $props();

	let hoverText = $derived(text ? 'hover:text-gray-600' : ' hover:bg-gray-100 py-1.5');
	let shape = $derived(rounded ? 'rounded-full' : 'rounded-lg');
	let color = $derived(primary ? 'bg-rose-500 hover:bg-rose-600 text-white justify-center' : '');
	let classes = $derived(
		`flex items-center ${className} ${hoverText} ${shape} ${color} cursor-pointer`
	);
</script>

<button class={classes}>
	{@render children()}
</button>
