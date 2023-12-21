<script lang="ts">
	import { createEventDispatcher, type ComponentType } from "svelte";
	import { externalClickHandler } from "./inputs";

	export let top: number = 0;
	export let center: boolean = true;
	export let component: ComponentType;

	let ref: HTMLElement;

	const dispatch = createEventDispatcher();

	export const close = () => {
		ref.parentNode.removeChild(ref);
	};
</script>

asdf
<div bind:this={ref} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,.5); backdrop-filter: blur(1px);" class="overlay z-[99999] backdrop-blur-sm fixed top-{top} bottom-0 left-0 right-0 flex">
	<div use:externalClickHandler on:externalClickEvent={() => dispatch("blur")} class="flex w-full h-full" class:items-center={center} class:justify-center={center}>
		<svelte:component this={component} />
	</div>
</div>
