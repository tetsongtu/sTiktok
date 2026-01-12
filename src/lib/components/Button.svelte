<script lang="ts">
	let {
		children,
		className = '',
		rounded = false,
		primary = false,
		circle = false,
		leftIcon = null,
		onClick = null,
		hideLabelOnMobile = false
	} = $props();
</script>

<button
	onclick={onClick}
	class={`${className} flex items-center justify-center
	cursor-pointer pointer-events-auto 
	px-2 py-1.5 gap-1
	${primary ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'hover:bg-gray-100'}
	${rounded ? 'rounded-full' : 'rounded-lg'}
	${circle ? 'size-12 bg-gray-100 hover:bg-gray-200' : ''}`}
>
	{#if leftIcon}
		<span>{leftIcon}</span>
	{/if}
	<span class:hidden={hideLabelOnMobile} class:xl:inline={hideLabelOnMobile}>
		{@render children()}
	</span>
</button>
