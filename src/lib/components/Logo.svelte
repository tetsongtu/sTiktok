<script lang="ts">
	const { children, className = '', onClick = null } = $props();
</script>

<header class="px-0.5 py-4 text-3xl font-bold">
	<button
		class="flex items-center transition-all duration-300
				hover:text-[2.05rem] cursor-pointer h-8"
		onclick={onClick}
	>
		<span
			class="flex items-center justify-center rounded-2xl
				hover:bg-gray-100 lg:hover:bg-transparent size-8">O</span
		>
		<span class={className}> {@render children()}</span>
	</button>
</header>
