<template>
  <p>Hi!!!</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dataP = ref("hello eee");

defineExpose({
  dataP,
});
// export default {
//   setup() {
//     return {
//       dataP
//     };
//   },
// };
</script>
