import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ComboboxListItemProps = typeof __propDef.props;
export type ComboboxListItemEvents = typeof __propDef.events;
export type ComboboxListItemSlots = typeof __propDef.slots;
export default class ComboboxListItem extends SvelteComponentTyped<ComboboxListItemProps, ComboboxListItemEvents, ComboboxListItemSlots> {
}
export {};
