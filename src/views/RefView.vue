<script lang="ts" setup>
import { ref, onMounted, watchEffect } from "vue";
// import ChildView from "@/components/ChildView.vue";

// onMounted(() => {
//   divRef.value.focus();
//   divRef.value.value = "Hello Echo";
// });

// watchEffect(() => {
//   if (divRef.value) {
//     divRef.value.focus();
//     divRef.value.value = "Hello Echo";
//   } else {
//     console.log(`didn't mounted`);
//   }
// });

const liList = ref(["hello", "hey", "is", "echo"]);
const vForRef = ref(null);

const divRef = ref(null);

const clickRef = () => {
  console.log(divRef.value.dataP);
};
</script>
<template>
  <!-- <p v-for="item in liList" ref="vForRef">{{item}}</p> -->
  <br />
  <p @click="clickRef">Click me!!</p>
  <!-- <input ref="divRef" style="height: 26px" /> -->

  <table>
    <ChildView ref="divRef"></ChildView>
  </table>
</template>
