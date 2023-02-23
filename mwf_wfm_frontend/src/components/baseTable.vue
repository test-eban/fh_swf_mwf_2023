<template>
  <div>
    <vue-good-table :columns="columns" :rows="rows" :editable="true" @edit="handleEdit">
    </vue-good-table>
  </div>
</template>

<script>
import VueGoodTable from 'vue-good-table';

export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
        },
        {
          label: 'Email',
          field: 'email',
        },
      ],
      rows: [
        {
          name: 'John Doe',
          age: 30,
          email: 'john.doe@example.com',
        },
        {
          name: 'Jane Smith',
          age: 25,
          email: 'jane.smith@example.com',
        },
        {
          name: 'Bob Johnson',
          age: 40,
          email: 'bob.johnson@example.com',
        },
      ],
    };
  },
  methods: {
    handleEdit({ row, field, value }) {
      // Handle the edited data
    },
  },
};
</script>