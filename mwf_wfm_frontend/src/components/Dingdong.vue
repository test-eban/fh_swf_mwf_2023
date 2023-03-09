<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      v-on:row-click="onRowClick" 
      v-on:cell-click="onCellClick" />
    </div>
</template>

<script>

// import the styles
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table-next';
import TaskService from '@/services/TaskService';

export default {
  name: 'taskTable',
  // add to component
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          label: 'Tasktyp',
          field: 'taskType',
        },
        {
          label: 'Sparte',
          field: 'branch',
        },
        {
          label: 'Bezeichnung',
          field: 'label',
          // type: 'date',
          // dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Beschreibung',
          field: 'description',
        },
        {
          label: 'Aufgabenbeschreibung',
          field: 'taskInstruction',
        },
        {
          label: 'Startdatum',
          field: 'startDate',
          type: 'date',
          dateInputFormat: 'yyy-MM-dd',
          dateOutputFormat: 'yyy-MM-dd',
        },
        {
          label: 'Enddatum',
          field: 'endDate', 
          type: 'date',
          dateInputFormat: 'yyy-MM-dd',
          dateOutputFormat: 'yyy-MM-dd',
        },
        {
          label: 'Status',
          field: 'status',
        },
        {
          label: 'Abbruchbemerkung',
          field: 'abortingRemark',
        },
        {
          label: 'Abschlussbemerkung',
          field: 'finishingRemark',
        },
        {
          label: 'Erstellt am',
          field: 'createdOn',
        },
      ],
      rows: [],
    };
  },
  created() {
    this.getTasksData(); // call getTasksData() when the component is created
  },
  methods: {
    onRowClick(params) {
      console.log("RowClick");
      // params.row - row object 
      // params.pageIndex - index of this row on the current page.
      // params.selected - if selection is enabled this argument 
      // indicates selected or not
      // params.event - click event
    },
    onCellClick(params) {
      console.log("CellClick");
    },
    async getTasksData() {
        try {
          const results = await TaskService.getTasks();
          this.rows = results['task'];
          console.log = this.rows;
        } catch (error) {
          console.log(error);
        }
      },
    }
};
</script>