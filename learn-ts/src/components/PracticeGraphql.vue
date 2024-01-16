<template>
  <main>
    <h1 class="m-3 text-3xl">PRACTICE GRAPHQL</h1>
    <mark class="text-slate-600 p-3 m-3" v-if="error">{{ error }}</mark>

    <button @click="refetch()">REFETCH</button>
    <p>
      <input
        class="p-1 rounded m-2 text-gray-500"
        v-model="myVariable"
        type="text"
      /><button @click="getNewReview">getData</button>
    </p>
    <p v-if="result?.getReview">
      <span class="m-2">ID: {{ result.getReview.id }}</span>
      <span class="m-2">CONTENT: {{ result.getReview.content }}</span>
      <strong class="m-2">Rating:{{ result.getReview.rating }}</strong>
    </p>

    <button @click="updateTitle">MUTATE</button>
    <section>
      <ul>
        <li
          class="m-3 border-2 p-3"
          v-for="item in result?.tracksForHome"
          :key="item.id"
        >
          <cite> {{ item.id }}</cite>
          <h2>{{ item.title }}</h2>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";

console.log("re-render");
const myVariable = ref<string>("");
const enableQuery = ref<boolean>(false);
onMounted(() => {
  myVariable.value = variables.value?.id || "test";
});
const list = ref(
  gql`
    query getList($id: ID!) {
      tracksForHome {
        id
        title
      }
      games {
        id
        title
        platform
      }
      getReview(id: $id) {
        id
        rating
        content
      }
    }
  `
);
const updateTitleGQL = gql`
  mutation UpdateTitle($trackID: ID!, $newTitle: String!) {
    updateTitle(trackID: $trackID, newTitle: $newTitle) {
      id
      title
    }
  }
`;
const { result, variables, loading, error, refetch, onResult } = useQuery(
  list.value,
  {
    id: "review_2",
  }
  // {
  //   fetchPolicy: "cache-first",
  // }
  // {
  //   pollInterval: 1000,
  // }
);
onResult((result) => {
  alert("ON_RESULT");
  console.log(result);
});
console.log(variables.value);
const { mutate } = useMutation(updateTitleGQL);
console.log(loading.value, error);
const getNewReview = () => {
  variables.value = {
    id: myVariable.value,
  };
  enableQuery.value = !enableQuery.value;
};
const updateTitle = async () => {
  try {
    const res = await mutate({
      variables: {
        trackID: "1",
        newTitle: "CHECK MUTATE",
        name: "Game 4",
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
watch([loading, error], () => {
  console.log(loading.value, error.value);
});
console.log(result.value);
</script>

<style lang="scss" scoped>
</style>