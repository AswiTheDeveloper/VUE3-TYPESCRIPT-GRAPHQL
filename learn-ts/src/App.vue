<template>
  <main>
    <h1 class="text-xl">Learn Type Script: {{ user }}</h1>
    <ul>
      <router-link class="m-4 underline" :to="{ name: 'learn-ts' }"
        >Learn Ts</router-link
      >
      <router-link class="underline" :to="{ name: 'finance-logger' }"
        >Finance Logger</router-link
      >
      <router-link class="underline m-4" :to="{ name: 'graphql' }"
        >GraphQL</router-link
      >
      <router-link class="underline m-4" :to="{ name: 'practiceGraphql' }"
        >Practice GraphQL</router-link
      >
    </ul>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      user: "Aswi",
    };
  },
  components: {},
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: white;
}
body {
  background-color: black;
}
main {
  width: 100%;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
