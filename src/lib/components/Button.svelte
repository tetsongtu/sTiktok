<script lang="ts">
	let { children, className = '', rounded = false, variant = false } = $props();

	// class="flex gap-1 items-center rounded-full px-2 h-full"
	let shape = $derived(rounded ? 'rounded-full' : 'rounded-lg');
	let color = $derived(variant ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'hover:bg-gray-100');
	let classes = $derived(`flex items-center justify-center
        py-1.5 cursor-pointer ${shape} ${color} ${className}`);
</script>

<button class={classes}>
	{@render children()}
</button>
