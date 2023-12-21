import DefaultOverlay from "./DefaultOverlay.svelte";
import type { ModalConfig } from "./modal-config";

export class ModalManager {
	public open(config: ModalConfig, props?: any) {
		const a = new DefaultOverlay({
			target: document.body,
			props: {
				component: config.component
			}
		});
		console.log(a);
		console.log(1212);
	}
}
export const modalManager = new ModalManager();
