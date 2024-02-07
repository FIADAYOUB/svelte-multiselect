import { getContext, setContext } from "svelte";
import type { Writable } from "svelte/store";

const CONTEXT_KEY = "custom::combobox";

export type SelectedItem = {
	id: string;
	text: string;
	selected?: boolean;
};

export type ComboboxContext = {
	selection: Writable<Record<string, SelectedItem>>;
	select(id: string, data: SelectedItem): void;
	unselect(id: string): void;
	toggle(id: string, data: SelectedItem): void;
};

export function getComboboxContext() {
	return getContext(CONTEXT_KEY) as ComboboxContext;
}

export function setComboboxContext(context: ComboboxContext) {
	return setContext(CONTEXT_KEY, context);
}
