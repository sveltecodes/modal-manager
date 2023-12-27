import DefaultOverlay from "./default-overlay.svelte";
import type { ModalConfig } from "./modal-config";
import { ModalInstance } from "./modal-instance";

export class ModalManager {
	public modals: { [name: string]: ModalInstance<any> } = {};

	public open(config: ModalConfig<any>, props?: any) {
		this.modals[config.name] = new ModalInstance(config);
		this.modals[config.name].manager = this;
		this.modals[config.name].overlay = new DefaultOverlay({
			target: document.body,
			props: {
				instance: this.modals[config.name]
			}
		});
	}

	public close(name: string) {
		this.modals[name].overlay.close();
		delete this.modals[name];
	}
}
