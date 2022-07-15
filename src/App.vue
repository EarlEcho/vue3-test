<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { provide, ref, getCurrentInstance } from "vue";
const {
  appContext: {
    config: { globalProperties: global },
  },
} = getCurrentInstance();

provide("iMessage", global.$tips);

// import HelloWorld from '@/components/HelloWorld.vue'

import CmptView from "@/views/CmptView.vue";

const innerText = ref("Hi!!!! innerText");

const innerTextChange = (e) => {
  console.log("innerTextChange!!", e);
  innerText.value = e;
};
const clickHandle = () => {
  console.log("click parent!!!!!");
};
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <CmptView id="test-multi-attr" v-model:text.capitalize="innerText" @update:innerText="innerTextChange" @click="clickHandle" />
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
