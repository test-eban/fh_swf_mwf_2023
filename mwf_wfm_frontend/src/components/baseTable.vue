<template>
  <div>
    <b-table striped hover :items="items">
      <template v-slot:cell(column1)="data">
        <input type="text" v-model="data.item.first_name" />
      </template>
      <template v-slot:cell(column2)="data">
        <input type="text" v-model="data.item.last_name" />
      </template>
      <template v-slot:cell(column3)="data">
        <input type="text" v-model="data.item.age" />
      </template>
      <template v-slot:cell(actions)="data">
        <div>
          <b-button variant="danger" @click="deleteRow(data.index)">
            Delete
          </b-button>
          <b-button variant="success" @click="saveRow(data.index)">
            Save
          </b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable, BButton } from "bootstrap-vue-next";
export default {
  components: {
    BTable,
    BButton,
  },
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
    deleteRow(index) {
      this.items.splice(index, 1);
    },
    saveRow(index) {
      // implement the save functionality here
      console.log("Saved row at index:", index);
    },
  },
};
</script>
