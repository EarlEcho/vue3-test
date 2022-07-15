<template>
  <p @click="showCmpt = true">is A CMPT(click)</p>
  <BCmpt v-if="showCmpt" />
</template>
<script setup>
import { defineAsyncComponent, ref } from "vue";
// import BCmpt from "./BCmpt.vue";

const BCmpt = defineAsyncComponent(() => import("./BCmpt.vue"));
const showCmpt = ref(false);
</script>
