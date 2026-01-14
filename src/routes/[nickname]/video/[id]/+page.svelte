<script lang="ts">
	import HomePage from '$src/routes/+page.svelte';
	import { comment, activeVideo } from '$lib/stores/index.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	onMount(() => {
		comment.open = true;
		activeVideo.id = Number(page.params.id);
	});
</script>

<HomePage />
