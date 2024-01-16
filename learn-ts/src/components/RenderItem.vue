<template>
  <section class="rounded border-solid border-slate-300 border-2 p-3 m-3">
    <h1 class="text-sky-400">{{ props.item.typeSelect }}</h1>
    <p class="text-emerald-500">{{ props.item.format() }}</p>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["item"]);
</script>

<style scoped>
</style>