<script lang="ts">
	import { goto } from '$app/navigation';
	import { reset, comment, search } from '$lib/stores/index.svelte';
	import SearchPanel from '../components/SearchPanel.svelte';
	import Button from '../components/Button.svelte';
	import Text from '../components/Text.svelte';

	export let className: string = '';
	const menus = [
		{ icon: 'O', label: 'For You' },
		{ icon: 'O', label: 'Explore' },
		{ icon: 'O', label: 'Following' },
		{ icon: 'O', label: 'LIVE' },
		{ icon: 'O', label: 'Upload' },
		{ icon: 'O', label: 'Profile' },
		{ icon: '...', label: 'More' }
	];

	function goHomeAndReset() {
		goto('/');
		if (comment.open) comment.open = false;
		reset.value = true;
	}
</script>

<aside class="px-4 py-2 {className}">
	<div class="pointer-events-auto flex flex-col gap-1 items-start">
		<header class="p-0.5 py-4 text-3xl font-bold">
			<button
				onclick={goHomeAndReset}
				class="flex items-center transition-all duration-300
				hover:text-[2.05rem] cursor-pointer h-8"
			>
				<div
					class="flex items-center justify-center rounded-2xl
				hover:bg-gray-100 lg:hover:bg-transparent size-8"
				>
					O
				</div>
				<span class={search.open ? 'hidden' : 'hidden lg:inline'}>LogO</span>
			</button>
		</header>

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
					<div
						class={`flex items-center gap-4 p-2 rounded-lg cursor-pointer
					  hover:bg-gray-100 hover:text-red-500
					${search.open ? 'w-10' : 'w-full lg:w-52'} h-10`}
					>
						<span class="flex items-center justify-center size-6">{item.icon}</span>
						<span class={`${search.open ? 'hidden' : 'hidden lg:flex'} whitespace-nowrap`}
							>{item.label}</span
						>
					</div>
				{/each}
			</nav>

			<div id="Login" class={`px-1 py-2 mb-1 w-full ${search.open ? 'hidden' : 'hidden lg:block'}`}>
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
</aside>

<SearchPanel />
