<script lang="ts">
	let { children, className = '', rounded = false, primary = false } = $props();
</script>

<button
	class={`${className} flex items-center cursor-pointer py-1.5
	${primary ? 'bg-rose-500 hover:bg-rose-600 text-white justify-center' : 'hover:bg-gray-100'}
	${rounded ? 'rounded-full' : 'rounded-lg'}`}
>
	{@render children()}
</button>
