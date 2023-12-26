# Svelte Modal Manager

Manage modals like a boss 🚀

No wrapper components, no extra markup, no dependencies, just modals.

* Comes with a backdrop overlay.
* Handles multiple modals at once.
* Handles multiple instances of the same modal at once.
* Access the modal manager from within your modal component.

## Installation

```bash
npm install @svelte.codes/modal-manager
```

## Usage

### Manager component

Properties for `ModalConfig`:

| name                   | default  | description                   |
|------------------------|----------|-------------------------------|
| `name`                 | required | The name of the modal.        |
| `classes`              | optional | Extra css classes to add.     |
| `component`            | required | Svelte component reference.   |
| `closeIcon`            | optional | Show a close icon, top right. |
| `closeOnEscape`        | optional | Close modal on escape key.    |
| `closeOnExternalClick` | optional | Close modal on outside click. |


```ts
<script lang="ts">
  import { ModalManager } from "@svelte.codes/modal-manager";
  import TestComponent from "../../lib/components/test-component.svelte";

  const manager = new ModalManager();

  manager.open({
    name: "test-modal-1",
    component: TestComponent,
    classes: "bg-slate-300/50 p-10"
  });
</script>

I'm inside a modal via modal manager!
```

When the modal manager instantiates your `component`, it will pass in a `ModalInstance` object as a prop
so you can interact with the manager from within your component.

### Client component

From inside your client component you can interact with the manager via the `instance` prop.

```ts
<script lang="ts">
  import { ModalInstance } from "@svelte.codes/modal-manager";

  export let instance: ModalInstance;
</script>

<div class="bg-slate-300 p-10">
  <h1 class="text-3xl font-bold underline">this is inside a modal</h1>
  <button on:click={() => instance.manager.close(instance.config.name)}>close</button>
</div>
```
