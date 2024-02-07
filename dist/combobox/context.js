import { getContext, setContext } from "svelte";
const CONTEXT_KEY = "custom::combobox";
export function getComboboxContext() {
    return getContext(CONTEXT_KEY);
}
export function setComboboxContext(context) {
    return setContext(CONTEXT_KEY, context);
}
