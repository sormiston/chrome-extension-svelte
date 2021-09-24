import App from "./App.svelte";
import { writable } from "svelte/store";

document.addEventListener("selectionchange", () => {
  const pos = window.getSelection()
  const range = document.createRange()
  range.setStart(pos.anchorNode, pos.anchorOffset)
  range.setEnd(pos.focusNode, pos.focusOffset)
  const rect = range.getBoundingClientRect()
  selection.set(rect)
});

export const selection = writable(null);

const app = new App({
  target: document.querySelector("#container"),
});

export default app;
