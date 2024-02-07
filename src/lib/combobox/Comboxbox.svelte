<script lang="ts">
	import { derived, writable } from "svelte/store";
	import ComboboxList from "./ComboboxList.svelte";
	import {
		getComboboxContext,
		setComboboxContext,
		type SelectedItem,
	} from "./context";
	import { slide } from "svelte/transition";

	let referenceElement: HTMLButtonElement;
	let open = false;

	const selection = writable<Record<string, SelectedItem>>({});

	const values = derived(selection, (selection) =>
		Object.values(selection).filter((d) => d.selected)
	);

	const context = setComboboxContext({
		selection,
		select(id) {
			selection.update((obj) => {
				// obj[id] = true;

				return obj;
			});
		},
		unselect(id) {
			selection.update((obj) => {
				const item = obj[id];
				if (item) {
					obj[id].selected = false;
				}

				return obj;
			});
		},
		toggle(id, data) {
			selection.update((obj) => {
				const item = obj[id];
				if (!item) {
					obj[id] = {
						...data,
						selected: true,
					};
				} else {
					const value = obj[id]?.selected ?? false;
					obj[id].selected = !value;
				}

				return obj;
			});
		},
	});

	function onclick() {
		open = !open;
	}

	function ondismiss(item) {
		return (ev: Event) => {
			ev.stopPropagation();
			context.unselect(item.id);
		};
	}
</script>

<div class="combobox">
	<button
		class="border border-neutral-800 border-solid px-4 py-1.5 rounded-sm flex flex-wrap gap-2 items-center"
		bind:this={referenceElement}
		on:click={onclick}
	>
		{#each $values as item (item.id)}
			<div
				class="border border-neutral-300 border-solid px-2 py-0.5 flex gap-2 items-center"
				transition:slide={{ duration: 100, axis:"x" }}
			>
				<div>{item.text}</div>
				<div on:click={ondismiss(item)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
						/></svg
					>
				</div>
			</div>
		{:else}
			No language selected !
		{/each}
	</button>

	<ComboboxList reference={referenceElement} {open}>
		<slot />
	</ComboboxList>
</div>

<style lang="postcss">
	.combobox {
		@apply relative;
	}
</style>
