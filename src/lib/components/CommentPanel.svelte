<script lang="ts">
	import CommentItem from '$lib/components/CommentItem.svelte';
	import { comment } from '$lib/stores/index.svelte';
</script>

<div
	id="CommentPanel"
	class="fixed right-0 top-0 h-screen w-96 bg-white border-l border-gray-200 pointer-events-auto
		transform transition-transform duration-300 ease-in-out"
	class:translate-x-full={!comment.open}
>
	<div class="flex flex-col h-full py-3 px-2">
		<header class="flex justify-between font-semibold mb-5">
			<div>Comments</div>
			<button
				class="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-100"
				onclick={() => (comment.open = false)}>x</button
			>
		</header>

		<main class="overflow-y-auto flex flex-col gap-4">
			<CommentItem />
			<CommentItem />
		</main>

		<footer
			class="mt-auto bg-gray-100 rounded-lg px-5 py-3 text-rose-500 font-semibold cursor-pointer"
		>
			Log in to comment
		</footer>
	</div>
</div>
