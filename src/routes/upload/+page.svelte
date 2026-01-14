<script lang="ts">
	import SidebarWrapper from '$lib/components/SidebarWrapper.svelte';
	import Logo from '$lib/components/Logo.svelte';

	const menus = [
		{ icon: 'O', label: 'Home', href: '/' },
		{ icon: 'O', label: 'Posts', href: '/posts' },
		{ icon: 'O', label: 'Analytics', href: '/analytics' },
		{ icon: 'O', label: 'Comments', href: '/comments' }
	];
</script>

<SidebarWrapper>
	<div class="px-4 py-2">
		<Logo>LogO Studio</Logo>
		<nav class="w-full flex gap-1.5 flex-col mt-1.5 text-lg font-semibold" id="Menus">
			{#each menus as item}
				<button
					class="flex items-center gap-4 p-2 h-10 rounded-lg
						cursor-pointer hover:bg-gray-100 hover:text-red-500"
				>
					<span class="flex items-center justify-center size-6">{item.icon}</span>
					<span class="whitespace-nowrap">{item.label}</span>
				</button>
			{/each}
		</nav>
	</div>
</SidebarWrapper>
