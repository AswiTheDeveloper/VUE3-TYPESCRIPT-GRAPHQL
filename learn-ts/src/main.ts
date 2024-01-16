import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./main.css";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const app = createApp(App);
app.use(router);

// Provide the Apollo client to the entire Vue app
app.provide(DefaultApolloClient, apolloClient);

app.mount("#app");
