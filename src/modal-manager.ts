import type { ModalConfig } from "./modal-config";

export class ModalManager {
  public open(config: ModalConfig, props?: any) {
    new config.component({
      target: document.body,
      props
    });
  }
}
export const modalManager = new ModalManager();
