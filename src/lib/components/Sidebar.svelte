<script lang="ts">
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
</script>

<aside class="px-4 py-2 flex flex-col gap-2 items-start {className}">
	<div class="pointer-events-auto">
		<header
			id="Logo"
			class=" h-16 py-4 px-1.5 rounded-2xl text-3xl font-bold cursor-pointer
			transition-all duration-300 hover:text-[2.05rem]"
		>
			O LogO
		</header>

		<div
			id="Search"
			class=" h-10 w-52 font-semibold flex items-center gap-1 bg-gray-100 rounded-full"
		>
			<button class="mx-3">O</button>
			<input class="w-full outline-none text-gray-600" placeholder="Search" />
			<button class="p-2">
				<span
					class="cursor-pointer flex items-center justify-center size-5 hover:bg-gray-200 rounded-full"
				>
					X
				</span>
			</button>
		</div>

		<nav id="Menus" class="">
			{#each menus as item}
				<div
					class="flex items-center gap-4 p-2 rounded-lg
						font-semibold text-lg w-52 cursor-pointer
						hover:bg-gray-100 hover:text-red-500"
				>
					<span class="mx-1">{item.icon}</span>
					<span>{item.label}</span>
				</div>
			{/each}
		</nav>

		<div class=" px-1 py-2 mb-1 w-full">
			<button
				class="w-full p-1.5 bg-rose-500 rounded-lg
				text-white text-lg font-semibold cursor-pointer
				hover:bg-rose-600"
			>
				Log in
			</button>
		</div>

		<div class="mt-1 border-t border-gray-200 w-full"></div>

		<footer
			class=" p-1 flex flex-col gap-1
			text-gray-400 text-sm font-bold"
		>
			<div class="cursor-pointer hover:text-gray-600">Company</div>
			<div class="cursor-pointer hover:text-gray-600">Program</div>
			<div class="cursor-pointer hover:text-gray-600">Terms & Policies</div>
			<div class="text-xs">© 2025 TikTok</div>
		</footer>
	</div>
</aside>
