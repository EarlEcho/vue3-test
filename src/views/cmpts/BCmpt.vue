<template>
  <div style="border:solid 1px red;">
    <p>is B CMPT</p>
    <h1>{{ datas }}</h1>
    <p @click="changeProvideData">click me to change</p>
  </div>
</template>
<script setup>
import { inject } from "vue";

const { datas, changeProvideData } = inject("isPrivideInfos");
</script>
