import { writable } from "svelte/store";

export const infoOverlayVisible = writable(false);



export const addOverlayVisible = writable(false);


export function infoOverlayActiveTab(active_tab: number) {
    if (typeof active_tab === 'number') {
        localStorage.setItem('active_tab', active_tab.toString());
        let root = document;
        (root.querySelectorAll('.info__tabs button')[active_tab-1] as HTMLButtonElement).click();
    }
}

