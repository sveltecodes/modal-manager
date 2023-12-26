import type { ModalConfig, ModalManager } from ".";

export class ModalInstance {
	public manager: ModalManager;
	public config: ModalConfig;
	public element?: HTMLElement;

	public constructor(config: ModalConfig) {
		this.config = config;
	}
}
