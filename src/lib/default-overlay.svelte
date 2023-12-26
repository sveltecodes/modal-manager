<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import { externalClickHandler } from "./external-click-handler";
	import type { ModalInstance } from "./modal-instance";

	export let instance: ModalInstance;

	let ref: HTMLElement;

	const dispatch = createEventDispatcher();

	export const close = () => {
		ref.parentNode.removeChild(ref);
	};

	onMount(() => {
		instance.element = ref;
	});
</script>

<div bind:this={ref} class="backdrop-blur-sm absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center {instance.config.classes}">
	<div use:externalClickHandler on:externalClickEvent={() => dispatch("blur")}>
		<svelte:component this={instance.config.component} {instance} />
	</div>
</div>
