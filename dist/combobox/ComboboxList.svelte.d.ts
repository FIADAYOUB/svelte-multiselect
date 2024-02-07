import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        reference: HTMLElement;
        open?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ComboboxListProps = typeof __propDef.props;
export type ComboboxListEvents = typeof __propDef.events;
export type ComboboxListSlots = typeof __propDef.slots;
export default class ComboboxList extends SvelteComponentTyped<ComboboxListProps, ComboboxListEvents, ComboboxListSlots> {
}
export {};
