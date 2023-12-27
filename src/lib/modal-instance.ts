import type { ModalConfig, ModalManager } from ".";
import type DefaultOverlay from "./default-overlay.svelte";

export class ModalInstance<T> {
	public manager: ModalManager;
	public config: ModalConfig<T>;
	public element?: HTMLElement;
	public overlay: DefaultOverlay;
	public constructor(config: ModalConfig<T>) {
		this.config = config;
	}
}
