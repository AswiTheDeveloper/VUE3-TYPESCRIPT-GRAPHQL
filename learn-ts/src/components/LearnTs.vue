<template>
  <aside>
    <blockquote>
      {{ author.name }}
      <cite> {{ author.isAdmin }}. </cite>
    </blockquote>
    <section>{{ check }}: <button @click="change">change</button></section>
    <ul>
      <li>
        <button @click="handleSort('title')">sort by title</button>
      </li>
      <li>
        <button @click="handleSort('salary')">sort by salary</button>
      </li>
      <li>
        <button @click="handleSort('id')">sort by id</button>
      </li>
    </ul>
    <section v-if="isSorted">
      <h1>Sorting...</h1>
    </section>
    <section v-else class="list">
      <article v-for="(user, index) in users" :key="index">
        <strong>{{ user.id }}</strong>
        <p>name: {{ user.title }}</p>
        <p>score: {{ user.salary }}</p>
        <cite>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          delectus officia nulla dolore id quos, tempore aliquam ipsum
          laudantium. Ratione numquam facere quaerat laborum quos sunt dolorum,
          molestias iusto cumque.
        </cite>
      </article>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import Job from "@/types/Job";
import OrderTerm from "@/types/orderTerm";

//PROPS
interface propType {
  name: string;
  age: number;
  isAdmin: boolean;
}

// const props = defineProps({
//   author: {
//     required: true,
//     type: Object as PropType<propType>,
//   },
// });

//Type Aliases
type NAME = number | string;
const isSorted = ref<boolean>(false);
const author = ref<propType>({ name: "alex", age: 24, isAdmin: true });
//Interfaces
interface USER {
  name: string | number;
  isWorking: boolean;
  age: number;
  //TYPED ARRAY - TUPLE(taple)
  projects: [string, number, string];
  numbers: number[];
}
const change = () => (check.value = 45);
const check = ref<NAME>("learn here");
type TEST = string;
const test = ref<TEST>("test string");

const user = ref<USER>({
  name: "Aswi",
  isWorking: true,
  age: 24,
  projects: ["Coding school", 3, "Hanriver"],
  numbers: [44, 55, 7],
});
user.value.name = 55;

//READONLY
let checkReadonly: readonly string[] = ["test", "check"];
console.log(checkReadonly);
checkReadonly.push("test");

//Array of USER(interface)
const users = ref<Job[]>([
  {
    title: "Aswi",
    salary: 100,
    status: true,
    id: 10,
  },
  {
    title: "Alex",
    salary: 150,
    status: false,
    id: 20,
  },
  {
    title: "John Doe",
    salary: 60000,
    status: true,
    id: 1,
  },
  {
    title: "Sarah Johnson",
    salary: 75000,
    status: true,
    id: 2,
  },
  {
    title: "Michael Smith",
    salary: 80000,
    status: false,
    id: 3,
  },
  {
    title: "Emily Davis",
    salary: 65000,
    status: true,
    id: 4,
  },
  {
    title: "Robert Brown",
    salary: 70000,
    status: true,
    id: 5,
  },
  {
    title: "Jessica Lee",
    salary: 55000,
    status: false,
    id: 6,
  },
  {
    title: "David Wilson",
    salary: 85000,
    status: true,
    id: 7,
  },
  {
    title: "Olivia Martinez",
    salary: 72000,
    status: true,
    id: 8,
  },
  {
    title: "William Anderson",
    salary: 78000,
    status: true,
    id: 9,
  },
  {
    title: "Sophia Garcia",
    salary: 68000,
    status: false,
    id: 10,
  },
]);
console.log(user.value);

//FUNCTION
interface checkType {
  name: string;
  role: string;
}
interface checkTypeTest extends checkType {
  age: number;
}
const checkFunction = (data: checkTypeTest): number => {
  console.log(data);
  return 77;
};
let testMe = ref<number>(
  checkFunction({ name: "aswi", age: 44, role: "vue.js" })
);
console.log(testMe);

checkFunction({ name: "alex", role: "UI", age: 55 });

const handleTerm = (arg: OrderTerm): string => {
  return arg;
};

handleTerm("title");
const showLoading = async () => {
  setTimeout(() => {
    isSorted.value = false;
  }, 2000);
};
const handleSort = async (text: string) => {
  isSorted.value = true;
  await showLoading();
  users.value.sort((a: Job, b: Job) => {
    return a[text] < b[text] ? -1 : 1;
  });
  console.log(users.value, text);
};
</script>

<style scoped>
aside {
  font-size: 1.5rem;
}
article {
  margin: 1rem;
}
button {
  padding: 2px 5px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 40%;
}
ul {
  list-style: none;
  display: flex;
  gap: 3rem;
  justify-content: center;
}
ul button {
  font-size: 16px;
  text-transform: uppercase;
  padding: 4px 8px;
}
h1 {
  text-align: center;
  padding: 3rem;
}
.anim-move {
  transition: all 1s;
}
</style>