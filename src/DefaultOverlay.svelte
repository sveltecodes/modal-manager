<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { externalClickHandler } from "./external-click-handler";

	export let top: number = 0;
	export let center: boolean = true;

	let ref: HTMLElement;

	const dispatch = createEventDispatcher();

	export const close = () => {
		ref.parentNode.removeChild(ref);
	};
</script>

<div bind:this={ref} class="overlay z-[99999] backdrop-blur-sm fixed top-{top} bottom-0 left-0 right-0 flex">
	<div use:externalClickHandler on:externalClickEvent={() => dispatch("blur")} class="flex w-full h-full" class:items-center={center} class:justify-center={center}>
		<slot />
	</div>
</div>
