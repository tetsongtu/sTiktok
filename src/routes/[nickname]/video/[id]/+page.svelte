<script lang="ts">
	import HomePage from '../../../+page.svelte';
	import { comment } from '$lib/stores/index.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		comment.open = true;
	});
</script>

<HomePage />
