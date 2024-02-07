import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ComboxboxProps = typeof __propDef.props;
export type ComboxboxEvents = typeof __propDef.events;
export type ComboxboxSlots = typeof __propDef.slots;
export default class Comboxbox extends SvelteComponentTyped<ComboxboxProps, ComboxboxEvents, ComboxboxSlots> {
}
export {};
