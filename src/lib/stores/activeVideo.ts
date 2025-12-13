import { writable } from 'svelte/store';

export const activeVideoId = writable<number | null>(null);
