<script lang="ts">
	interface Props {
		children: any;
		content: string;
		className?: string;
	}
	let { children, content, className = '' }: Props = $props();
</script>

<div class="relative group h-full">
	{@render children()}
	<div
		class="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap
    opacity-0 group-hover:opacity-100 pointer-events-none transition {className}
    bg-black/80 rounded-md px-2 py-1 text-white"
	>
		{content}
	</div>
</div>
