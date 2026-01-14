<script lang="ts">
	let { children, className } = $props();
</script>

<aside class="bg-gray-100 h-screen w-20 lg:w-62 {className}">
	{@render children()}
</aside>
