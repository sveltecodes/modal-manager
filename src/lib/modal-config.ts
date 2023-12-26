import type { ComponentType } from "svelte";

export class ModalConfig {
	public name: string;
	public classes?: string;
	public component: ComponentType;
	public closeIcon?: boolean;
	public closeOnEscape?: boolean;
	public closeOnExternalClick?: boolean;

	public constructor(obj: ModalConfig) {
		Object.assign(this, obj);
	}
}
