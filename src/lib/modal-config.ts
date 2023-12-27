import type { ComponentType } from "svelte";

export class ModalConfig<T> {
	public name: string;
	public classes?: string;
	public component: ComponentType;
	public closeIcon?: boolean;
	public closeOnEscape?: boolean;
	public closeOnExternalClick?: boolean;
	public data?: T;
	public constructor(obj: ModalConfig<T>) {
		Object.assign(this, obj);
	}
}
