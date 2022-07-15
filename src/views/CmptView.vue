<script>
export default {
  //   inheritAttrs: false, // 禁用透传
};
</script>
<script setup>
import { ref ,useAttrs} from "vue";
const props = defineProps({
  text: String,
  textModifiers: { default: () => {} },
});
const emits = defineEmits(["update:innerText"]);

console.log(useAttrs());
const changeText = () => {
  let newText = "no modifiers text";
  if (props.text.capitalize) {
    newText = "has modifiers text";
  }
  emits("update:innerText", newText);
};

const clickHandle = () => {
  console.log("click child!!!!");
};
</script>

<template>
  <!-- <div @click="clickHandle"> -->
  <div>hi</div>
  <!-- <p>v-model:text ----- {{ $attrs }}</p> -->
  <br />
  <p v-bind="$attrs" @click="changeText">Click me change text!!!</p>
  <!-- </div> -->
</template>
