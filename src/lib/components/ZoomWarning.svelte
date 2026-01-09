<script lang="ts">
	let showWarning = $state(false);

	const checkZoom = () => {
		const zoomLevel = Math.round((window.devicePixelRatio || 1) * 100);
		const isDefaultZoom = zoomLevel === 100;
		showWarning = !isDefaultZoom;
	};

	$effect(() => {
		checkZoom();
		window.addEventListener('resize', checkZoom);
		return () => window.removeEventListener('resize', checkZoom);
	});

	$effect(() => {
		if (!showWarning) return;
		const t = setTimeout(() => (showWarning = false), 5000);
		return () => clearTimeout(t);
	});
</script>

{#if showWarning}
	<div
		class="fixed z-10 top-20 left-1/2 -translate-x-1/2 text-xl
        bg-red-500 rounded-full p-6 flex items-center gap-3"
	>
		<span class="">⚠️</span>
		<span class="text-white font-semibold"> Vui lòng đặt zoom trình duyệt về 100% </span>
	</div>
{/if}
