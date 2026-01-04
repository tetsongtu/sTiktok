<script lang="ts">
	let { children, className = '', rounded = false, primary = false, text = false } = $props();
</script>

<button
	class={`${className} flex items-center cursor-pointer 
	${text ? 'hover:text-gray-600' : 'hover:bg-gray-100 py-1.5'} 
	${primary && 'bg-rose-500 hover:bg-rose-600 text-white justify-center'}
	${rounded ? 'rounded-full' : 'rounded-lg'}`}
>
	{@render children()}
</button>
