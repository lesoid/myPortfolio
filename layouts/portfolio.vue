<!-- useState -->
<template>
  <!-- <PortfolioHeader @ee="passId" :pp="scroll"></PortfolioHeader> -->
  <LayoutsPortfolioHeader id="header_layout" class="header_layout"></LayoutsPortfolioHeader>
  <div class="def__slot"><slot></slot></div>
  <LayoutsFooter></LayoutsFooter>
</template>

<script setup lang="ts">
// import { useScrolling } from "../composables/useScroll";

// const scroll = useScrolling();
// function passId(yy: string) {
//   console.log("!!!tt " + yy); 
//   scroll.value = yy;
// }
</script>