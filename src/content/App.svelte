<script>
  import { selection } from "./main.js";
  export let name;
  console.log("hello");

  let bottom;
  let left;
  $: {
    console.log($selection)
    if ($selection) {
      bottom = $selection.bottom;
      left = $selection.left;
    }
  }
</script>

<main id="my-flip-test" style="top: {bottom}px; left: {left}px">
  
</main>
