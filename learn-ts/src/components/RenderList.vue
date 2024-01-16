<template>
  <main>
    <section v-for="list in props.list" :key="list.details">
      <RenderItem :item="list" />
    </section>
  </main>
</template> 

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import RenderItem from "./RenderItem.vue";
const props = defineProps({
  list: {
    required: true,
    type: Array,
  },
});
console.log(props.list, "list");
</script>

<style scoped>
</style>