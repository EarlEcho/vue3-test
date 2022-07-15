<script setup lang="ts">
import { ref, watch, reactive, watchEffect } from "vue";
const x = ref(0);
const y = ref(0);
const obj = reactive({
  name: "Echo",
});
// watch(x, (newVal, oldVal) => {
//   console.log(`x is: ${newVal}, oldVal is: ${oldVal}`);
// });
// // watch 一个响应式对象的属性
// watch(
//   () => obj.name,
//   (newVal, oldVal) => {
//     console.log(`obj.name is: ${newVal}, oldVal is: ${oldVal}`);
//   },
//   { deep: true }
// );

// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum of x + y is: ${sum}`)
//   }
// )

// // 多个来源组成的数组
// watch([x, () => y.value], ([newX, newY], [oldX, oldY]) => {
//   console.log(`x is ${newX} and y is ${newY}`);
//   console.log(`oldX is ${oldX} and oldY is ${oldY}`);
// });

const getChangeData = () => {
  console.log(`sum of x + y is: ${x.value + y.value}`);
};
getChangeData();
watch([x, y], (val) => {
  getChangeData();
});

// watchEffect(() => {
//   console.log(`sum of x + y is: ${x.value + y.value}`);
// });

const plusHandle = () => {
  x.value = x.value + 100;
  y.value++;
  //   printHandle();
  //   y.value--;
  //   obj.name = "Hello Echo";
  //   console.log(`obj.name`, obj.name);
};

const printHandle = () => {
  console.log(x);
  console.log(x.value);
};
</script>

<template>
  <div>
    x：{{ x }} y：{{ y }}

    <br />

    obj.name = {{ obj.name }}
    <br />

    <span @click="plusHandle">Click me to change!</span>
  </div>
</template>
