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

<aside class="px-4 py-2 {className}">
	<div class="pointer-events-auto flex flex-col gap-1 items-start">
		<header class="p-0.5 py-4 text-3xl font-bold">
			<div
				class="flex items-center transition-all duration-300
				hover:text-[2.05rem] cursor-pointer h-8"
			>
				<div
					class="flex items-center justify-center rounded-2xl
				hover:bg-gray-100 lg:hover:bg-transparent size-8"
				>
					O
				</div>
				<span class="hidden lg:inline">LogO</span>
			</div>
		</header>

		<div id="Search" class="relative flex font-semibold">
			<button
				class="z-10 bg-gray-100 rounded-full size-10
			hover:bg-gray-200 lg:hover:bg-transparent
			cursor-pointer lg:cursor-default">O</button
			>
			<div class=" absolute hidden lg:flex">
				<input
					class="px-10 w-52 h-10 outline-none text-gray-600 bg-gray-100 rounded-full"
					placeholder="Search"
				/>
				<button
					class="absolute top-1/2 -translate-y-1/2 right-0 z-10
				flex items-center justify-center size-10"
				>
					<span
						class="cursor-pointer hover:bg-gray-200 rounded-full size-5 flex items-center justify-center"
						>x</span
					>
				</button>
			</div>
		</div>

		<nav id="Menus">
			{#each menus as item}
				<div
					class="flex items-center gap-4 p-2 rounded-lg
						font-semibold text-lg w-full lg:w-52 cursor-pointer
						hover:bg-gray-100 hover:text-red-500"
				>
					<span class="mx-1">{item.icon}</span>
					<span class="hidden lg:flex">{item.label}</span>
				</div>
			{/each}
		</nav>

		<div id="Login" class=" px-1 py-2 mb-1 w-full hidden lg:block">
			<button
				class="w-full p-1.5 bg-rose-500 rounded-lg
				text-white text-lg font-semibold cursor-pointer
				hover:bg-rose-600"
			>
				Log in
			</button>
		</div>

		<footer class="hidden lg:flex flex-col gap-2">
			<div class="mt-1 border-t border-gray-200 w-full"></div>
			<nav
				class=" p-1 flex flex-col gap-1
			text-gray-500 font-semibold"
			>
				<div class="cursor-pointer hover:text-gray-600">Company</div>
				<div class="cursor-pointer hover:text-gray-600">Program</div>
				<div class="cursor-pointer hover:text-gray-600">Terms & Policies</div>
				<small class="text-xs">© 2025 TikTok</small>
			</nav>
		</footer>
	</div>
</aside>
