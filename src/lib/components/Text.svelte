<script lang="ts">
	let { children, underline = false } = $props();
</script>

<span
	class={`cursor-pointer hover:text-gray-600
	${underline ? 'hover:underline' : ''}`}
>
	{@render children()}
</span>
