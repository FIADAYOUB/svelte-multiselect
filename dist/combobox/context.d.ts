/// <reference types="svelte" />
import type { Writable } from "svelte/store";
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
export declare function getComboboxContext(): ComboboxContext;
export declare function setComboboxContext(context: ComboboxContext): ComboboxContext;
