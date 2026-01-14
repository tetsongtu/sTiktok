<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { reset, comment, search, activeVideo } from '$lib/stores/index.svelte';
	import SearchPanel from '$lib/components/SearchPanel.svelte';
	import Button from '$lib/components/Button.svelte';
	import Text from '$lib/components/Text.svelte';
	import SidebarWrapper from '$lib/components/SidebarWrapper.svelte';
	import Logo from '$lib/components/Logo.svelte';

	export let className: string = '';
	const menus = [
		{ icon: 'O', label: 'For You', href: '/' },
		{ icon: 'O', label: 'Explore', href: '/explore' },
		{ icon: 'O', label: 'Following', href: '/following' },
		{ icon: 'O', label: 'LIVE', href: '/live' },
		{ icon: 'O', label: 'Upload', href: '/upload' },
		{ icon: 'O', label: 'Profile', href: '/profile' },
		{ icon: '...', label: 'More', href: '/more' }
	];

	function goHomeAndReset() {
		goto('/');
		if (comment.open) comment.open = false;
		reset.value = true;
		activeVideo.id = null;
	}

	function isForYouRoute(pathname: string) {
		if (page.url.searchParams.has('video')) return false;
		if (pathname === '/') return true;
		return /^\/@[^/]+(\/video\/\d+)?$/.test(pathname);
	}
</script>

<SidebarWrapper {className}>
	<div class="px-4 py-2">
		<div class="pointer-events-auto flex flex-col gap-1 items-start">
			<Logo className={search.open ? 'hidden' : 'hidden lg:inline'} onClick={goHomeAndReset}
				>LogO</Logo
			>

			<button
				onclick={(e) => {
					e.stopPropagation();
					search.open = !search.open;
				}}
				class={`flex items-center font-semibold
			rounded-full bg-transparent lg:bg-gray-100 cursor-pointer
			${search.open ? 'w-10' : 'w-full'}`}
			>
				<div
					class="size-10 flex items-center justify-center
				rounded-full hover:bg-gray-200 lg:hover:bg-transparent"
				>
					O
				</div>
				<div class={`${search.open ? 'hidden' : 'hidden lg:flex'} flex-1 items-center `}>
					<div class="text-black/30">Search</div>
					<div
						class="size-10 hover:bg-gray-200 rounded-full
					flex items-center justify-center ml-auto"
					>
						x
					</div>
				</div>
			</button>

			<div class="text-lg font-semibold">
				<nav class="w-full flex gap-1.5 flex-col mt-1.5" id="Menus">
					{#each menus as item}
						<button
							onclick={() => {
								if (item.href === '/') {
									goHomeAndReset();
								} else if (item.href === '/upload') {
									goto(item.href);
								} else {
									goto(item.href);
								}
							}}
							class="flex items-center gap-4 p-2 h-10 rounded-lg
						cursor-pointer hover:bg-gray-100 hover:text-red-500"
							class:w-10={search.open}
							class:w-full={!search.open}
							class:lg:w-52={!search.open}
							class:text-red-500={item.href === '/'
								? isForYouRoute(page.url.pathname)
								: page.url.pathname.startsWith(item.href)}
						>
							<span class="flex items-center justify-center size-6">{item.icon}</span>
							<span class={`${search.open ? 'hidden' : 'hidden lg:flex'} whitespace-nowrap`}
								>{item.label}</span
							>
						</button>
					{/each}
				</nav>

				<div id="Login" class={`px-1 py-2 mb-1 ${search.open ? 'hidden' : 'hidden lg:block'}`}>
					<Button primary className="w-full">Log in</Button>
				</div>
			</div>

			<footer class="hidden lg:flex flex-col gap-2 w-full">
				<div class="mt-1 border-t border-gray-200 w-full"></div>
				<nav
					class=" p-1 flex flex-col gap-1
			text-gray-500 font-semibold"
				>
					<Text>Company</Text>
					<Text>Program</Text>
					<Text>Terms & Policies</Text>
					<small class="text-xs">© 2025 TikTok</small>
				</nav>
			</footer>
		</div>
	</div>
</SidebarWrapper>

<SearchPanel />
