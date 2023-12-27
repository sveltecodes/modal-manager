<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import { externalClickHandler } from "./external-click-handler";
	import type { ModalInstance } from "./modal-instance";

	interface $$Events {
		close: CustomEvent<string>;
		externalClickEvent: (e: PointerEvent) => void;
	}

	export let instance: ModalInstance<any>;

	let ref: HTMLElement;

	const dispatch = createEventDispatcher<Record<keyof $$Events, any>>();

	export const close = (e: { e: PointerEvent; child: HTMLElement }) => {
		console.log(e);
		dispatch("close");
		instance.overlay.$destroy();
	};

	onMount(() => {
		instance.element = ref;
	});
	// extend div type and add event handler:
</script>

<div bind:this={ref} class="backdrop-blur-sm bg-black/50 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center {instance.config.classes}">
	<div use:externalClickHandler on:blur={close}>
		<svelte:component this={instance.config.component} {instance} />
	</div>
</div>
