import DefaultOverlay from "./default-overlay.svelte";
import type { ModalConfig } from "./modal-config";
import { ModalInstance } from "./modal-instance";

export class ModalManager {
	public modals: { [name: string]: ModalInstance<any> } = {};

	public open(config: ModalConfig<any>, props?: any) {
		this.modals[config.id] = new ModalInstance(config);
		this.modals[config.id].manager = this;
		this.modals[config.id].overlay = new DefaultOverlay({
			target: document.body,
			props: {
				instance: this.modals[config.id]
			}
		});
	}

	public close(id: string) {
		this.modals[id].overlay.$destroy();
		delete this.modals[id];
	}
}
