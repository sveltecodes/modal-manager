import DefaultOverlay from "./default-overlay.svelte";
import type { ModalConfig } from "./modal-config";
import { ModalInstance } from "./modal-instance";

export class ModalManager {
	public modals: { [name: string]: ModalInstance } = {};

	public open(config: ModalConfig, props?: any) {
		this.modals[config.name] = new ModalInstance(config);
		this.modals[config.name].manager = this;

		new DefaultOverlay({
			target: document.body,
			props: {
				instance: this.modals[config.name]
			}
		});
	}

	public close(name: string) {
		this.modals[name].element.parentElement.removeChild(this.modals[name].element);
		delete this.modals[name];
	}
}
