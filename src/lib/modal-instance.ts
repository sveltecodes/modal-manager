import type { ModalConfig, ModalManager } from ".";
import type DefaultOverlay from "./default-overlay.svelte";

export class ModalInstance {
	public manager: ModalManager;
	public config: ModalConfig;
	public element?: HTMLElement;
	public overlay: DefaultOverlay;

	public constructor(config: ModalConfig) {
		this.config = config;
	}
}
