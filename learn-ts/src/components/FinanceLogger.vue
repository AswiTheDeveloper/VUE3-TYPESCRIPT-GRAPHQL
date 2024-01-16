<template>
  <main>
    <main class="flex flex-col gap-5 w-full items-center">
      <h1 class="text-cyan-400 text-5xl h-20">Finance Logger</h1>
      <main>
        <RenderList :list="renderList || []" />
      </main>
      <section
        class="bg-neutral-500 min-h-36 w-full flex flex-col justify-evenly items-center"
      >
        <div
          class="flex gap-5 items-end flex-wrap justify-center w-full font-bold"
        >
          <div class="flex flex-col text-gray-950">
            <label for="" class="mb-2">Type:</label>
            <select v-model="typeSelect" name="" id="">
              <option class="text-gray-950" selected value="">SELECT</option>
              <option class="text-gray-950" value="payment">Payment</option>
              <option class="text-gray-950" value="invoice">Invoice</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="" class="mb-2">To/From:</label>
            <input
              v-model="toFrom"
              class="rounded text-gray-950"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="flex flex-col">
            <label for="" class="mb-2">Details:</label>
            <input
              v-model="details"
              class="rounded text-gray-950"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="flex flex-col">
            <label for="" class="mb-2">Amount:</label>
            <input
              v-model="amount"
              class="rounded text-gray-950"
              type="number"
              name=""
              id=""
            />
          </div>
          <button @click="handleAdd" class="bg-indigo-600 px-4 rounded">
            Add {{ circ(10).toFixed(2) }}
          </button>
        </div>
        <cite class="underline">Aswi</cite>
      </section>
    </main>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { INVOICE, PERSON, PAYMENT, INV } from "./invoce";
import RenderList from "./RenderList.vue";

type CHAR = "test" | "check" | "mario";
let character = ref<CHAR>("check");
character.value = "testMe";
console.log(character.value);

let circ = (dm: number, optional = 10, test?: string): number => {
  return Math.PI * dm;
};

//TUPLE - typed Array;

type NAMES = [string, string, string, number];
let names = ref<NAMES>(["aswi", "alex", "aloe", 66]);
names.value.push(66);
interface ASWI {
  name: string;
  age: number;
  isActive: boolean;
}
let aswi = ref<ASWI>({
  name: "aswi",
  age: 24,
  isActive: true,
});
console.log(aswi.value);
const typeSelect = ref<string>("");
const toFrom = ref<string>("");
const details = ref<string>("");
const amount = ref<number | null>(null);
const renderList = ref([]);

const alexInvoice = new INVOICE("aloe", "work on the website", 546);
const aloeInvoice = new INVOICE("alex", "work on the Figma", 24356);

//ARRAY OF CLASSES
const invoices = ref<INVOICE[]>([aloeInvoice]);
invoices.value.push(alexInvoice);
// invoices.value.push("check");
console.log(invoices.value, alexInvoice.format());

const handleAdd = (): void => {
  if (!(typeSelect.value !== "" && details.value && amount.value)) {
    alert("MISSING FIELDS");
    return;
  }
  let doc = ref<INV | null>(null);
  if (typeSelect.value == "invoice") {
    doc.value = new INVOICE(toFrom.value, details.value, amount.value);
  } else {
    doc.value = new PAYMENT(toFrom.value, details.value, amount.value);
  }
  console.log(doc.value);
  renderList.value.push(doc.value);
};

//INTERFACES
const me = ref<PERSON[]>([
  {
    name: "aloe",
    age: 66,
    speak(x) {
      return `${this.name} can speak ${x}`;
    },
    spend(x) {
      return `${this.name} spend ${x}`;
    },
  },
  {
    name: "alex",
    age: 33,
    speak(x) {
      return `${this.name} can speak ${x}`;
    },
    spend(x): string {
      return `${this.name} spend ${x}`;
    },
  },
]);
console.log(me.value, me.value[1].speak("HINDI"));
</script>

<style scoped>
input,
select {
  padding: 5px;
  border-radius: 5px;
}
</style>