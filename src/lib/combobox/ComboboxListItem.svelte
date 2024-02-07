<script lang="ts">
	import { derived } from "svelte/store";
	import { nanoid } from "nanoid";
	import { getComboboxContext } from "./context";

	const context = getComboboxContext();
	const selection = context.selection;

	export let id: string = nanoid();

	let element: HTMLLIElement;

	const isSelected = derived(
		selection,
		(selection) => selection[id]?.selected ?? false
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

<style lang="postcss">
	li {
		@apply px-4 py-2 hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer select-none;

		&.selected {
			@apply bg-neutral-500;
		}
	}
</style>
