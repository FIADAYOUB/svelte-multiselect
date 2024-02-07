<script>import { derived } from "svelte/store";
import { nanoid } from "nanoid";
import { getComboboxContext } from "./context";
const context = getComboboxContext();
const selection = context.selection;
export let id = nanoid();
let element;
const isSelected = derived(
  selection,
  (selection2) => selection2[id]?.selected ?? false
);
function onclick() {
  context.toggle(id, { id, text: element.innerText });
}
</script>

<li
	class="combobox-list-item"
	class:selected={$isSelected}
	bind:this={element}
	on:click={onclick}
>
	<slot />
</li>

<style>
	li {

    cursor: pointer;

    -webkit-user-select: none;

       -moz-user-select: none;

            user-select: none;

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem
}

li:hover {

    --tw-bg-opacity: 1;

    background-color: rgba(250, 250, 250, 1);

    background-color: rgba(250, 250, 250, var(--tw-bg-opacity))
}

li:active {

    --tw-bg-opacity: 1;

    background-color: rgba(245, 245, 245, 1);

    background-color: rgba(245, 245, 245, var(--tw-bg-opacity))
}

		li.selected {

    --tw-bg-opacity: 1;

    background-color: rgba(115, 115, 115, 1);

    background-color: rgba(115, 115, 115, var(--tw-bg-opacity))
}
</style>
