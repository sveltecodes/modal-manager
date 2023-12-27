<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from "svelte";
	import type { ModalInstance } from "./modal-instance";

	interface $$Events {
		close: CustomEvent<string>;
		externalClickEvent: (e: PointerEvent) => void;
	}

	export let instance: ModalInstance<any>;

	onMount(() => {
		instance.element = ref;
	});

	onDestroy(() => {
		dispatch("close");
		document.removeEventListener("click", handleClick, true);
	});

	let ref: HTMLElement;

	const dispatch = createEventDispatcher<Record<keyof $$Events, any>>();

	const handleClick = (e: MouseEvent) => {
		// @ts-ignore
		if (e.target.contains(ref)) {
			instance.manager.close(instance.config.id);
		}
	};

	document.addEventListener("click", handleClick, true);
</script>

<div bind:this={ref} class="modal-overlay backdrop-blur-sm bg-black/50 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center {instance.config.classes}">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={handleClick} on:blur={close} class="modal-content">
		<svelte:component this={instance.config.component} {instance} />
	</div>
</div>
