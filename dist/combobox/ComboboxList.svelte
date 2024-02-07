<script>import { autoPlacement } from "@floating-ui/dom";
import { computePosition, offset } from "@floating-ui/dom";
import { tick } from "svelte";
import { fly, slide } from "svelte/transition";
export let reference;
export let open = false;
function popup(node) {
  compute().then(() => {
  });
  return {
    update() {
      compute().then(() => {
      });
      console.log("................");
    },
    destroy() {
    }
  };
  function compute() {
    return computePosition(reference, node, {
      middleware: [
        offset(8),
        autoPlacement({
          alignment: "start",
          allowedPlacements: ["bottom-start", "top-start"]
        })
      ]
    }).then(({ x, y, placement }) => {
      const k = placement.includes("top") ? -1 : 1;
      node.style.top = "0";
      node.style.left = "0";
      node.style.transform = `translate(${x}px, ${y}px) translateY(${k * 2}px)`;
    });
  }
}
</script>

{#if open}
	<div
		class="combobox-list"
		use:popup
		transition:slide={{ duration: 100 }}
	>
		<ul class="inner bg-white border border-neutral-100 shadow-sm">
			<slot />
		</ul>
	</div>
{/if}

<style>
	.combobox-list {
    position: absolute
}
</style>
