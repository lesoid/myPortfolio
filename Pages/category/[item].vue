
<script setup lang="ts">
import getParam from "~/composables/getParam";

const topicName = getParam('item') as string
console.log("!!! Возврат параметра :"+ topicName)

definePageMeta({
    // middleware: ["guest"],
  //  layout: "defstatic",
  });
</script>

<template>
    <!-- <p>{{ topicName }}</p> -->
    <CatSvgExemple></CatSvgExemple>
</template>