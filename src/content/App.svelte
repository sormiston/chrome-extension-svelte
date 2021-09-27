<script>
  import { selection, choices, buttonClickHandler } from "./main.js";
  console.log("hello");

  let bottom;
  let left;
  $: {
    if ($selection) {
      bottom = $selection.bottom;
      left = $selection.left;
    }
  }
</script>

<main id="my-flip-test" style="top: {bottom}px; left: {left}px">
  {#each $choices as choice}
    <button
      class="flip-button"
      data-flip-choice={choice.id}
      data-flip-error={choice.errorId}
      on:click={buttonClickHandler}
    >
      {choice.word}</button
    >
  {/each}
</main>
