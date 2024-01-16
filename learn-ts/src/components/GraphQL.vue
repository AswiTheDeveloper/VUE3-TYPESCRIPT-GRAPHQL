<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result.tracksForHome.length">
      <ul class="w-full flex flex-wrap justify-evenly p-4 items-center gap-2">
        <li
          v-for="track in result.tracksForHome"
          :key="track.id"
          class="flex flex-col w-1/4"
        >
          <img class="w-full" :src="track.thumbnail" alt="track.title" />
          <span> {{ track.title }} by {{ track.author.name }} </span>
          <h3>{{ track.author.name }}</h3>
        </li>
      </ul>
    </div>
    <div v-else>No tracks available.</div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useQuery, ApolloError } from "@vue/apollo-composable";
import { gql, DocumentNode } from "@apollo/client/core";

// Define the shape of the data returned from the GraphQL query
interface TRACK {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
  };
  modulesCount: number;
  thumbnail: string;
  length: number;
}

// Define your GraphQL query
const TRACKS: DocumentNode = gql`
  query TestQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
      }
      modulesCount
      thumbnail
      length
    }
  }
`;
// Use the useQuery hook to fetch data
const { result, loading, error } = useQuery(TRACKS);

watch(result, (value) => {
  console.log(value);
});
</script>