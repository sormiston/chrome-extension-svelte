import App from "./App.svelte";
import { writable } from "svelte/store";

document.addEventListener("selectionchange", () => {
  const pos = window.getSelection();
  const range = document.createRange();
  range.setStart(pos.anchorNode, pos.anchorOffset);
  range.setEnd(pos.focusNode, pos.focusOffset);
  const rect = range.getBoundingClientRect();
  selection.set(rect);
});

export const buttonClickHandler = (evt) => {
  console.log(evt.target.getAttribute("data-flip-choice"));
  setTimeout(() => {
    selection.set(null);
    choices.set([]);
  }, 1000);
};

export const selection = writable(null);
export const choices = writable([
  {
    id: 1,
    errorId: 13,
    word: "Veiculado",
  },
  {
    id: 2,
    errorId: 13,
    word: "Veiculados",
  },
  {
    id: 3,
    errorId: 13,
    word: "Veiculando",
  },
  {
    id: 4,
    errorId: 13,
    word: "Veiculada",
  },
]);

const app = new App({
  target: document.querySelector("#container"),
});

export default app;
