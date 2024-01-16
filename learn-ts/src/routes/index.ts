import { createRouter, createWebHistory } from "vue-router";
import LearnTs from "@/components/LearnTs.vue";
import FinanceLogger from "@/components/FinanceLogger.vue";
import GraphQL from "@/components/GraphQL.vue";
import PracticeGraphQL from "@/components/PracticeGraphql.vue";

const routes = [
  {
    path: "/",
    redirect: "/learn-ts",
  },
  {
    path: "/learn-ts",
    name: "learn-ts",
    component: LearnTs,
  },
  {
    path: "/finance-logger",
    name: "finance-logger",
    component: FinanceLogger,
  },
  {
    path: "/graphql",
    name: "graphql",
    component: GraphQL,
  },
  {
    path: "/practice-graphql",
    name: "practiceGraphql",
    component: PracticeGraphQL,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
