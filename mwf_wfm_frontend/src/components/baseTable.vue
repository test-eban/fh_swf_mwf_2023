<template>
  <v-data-table :headers="headers" :items="tasks" :sort-by="[{ key: 'label', order: 'asc' }]" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Workforcemanagement</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark class="mb-2" v-bind="props">
              Neue Aufgabe
            </v-btn>
          </template>
          <v-card label:editForm>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.label" label="Bezeichnung"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.description" label="Beschreibung"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="editedItem.taskType"
                      :items="items.taskTypes"
                      label="Aufgabentyp"
                      variant="solo"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="editedItem.branch"
                      :items="items.branches"
                      label="Sparte"
                      variant="solo"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model="editedItem.taskInstruction" label="Arbeitsanweisung"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model="editedItem.startDate" label="Startdatum" type="datetime-local"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model="editedItem.endDate" label="Startdatum" type="datetime-local"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Sind Sie sicher, dass Sie \ndiese Aufgabe löschen wollen??</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Abbrechen</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn color="blue" size="small" class="me-2" @click="editItem(item.raw)">
        Starten
      </v-btn>
      <v-btn color="green" size="small" class="me-2" @click="editItem(item.raw)">
        Beenden
      </v-btn>
      <v-btn color="grey" size="small" class="me-2" @click="editItem(item.raw)">
        Ändern
      </v-btn>
      <v-btn color="red" size="small" @click="deleteItem(item.raw)">
        Löschen
      </v-btn>
      <v-btn :color="editedItem.status == 'started' ? 'green darken-1' : editedItem.status == 'finished' ? 'grey' : ''" :disabled="editedItem.status == 'finished'" @click="updateStatus(editedItem)">
        {{ editedItem.status == 'started' ? 'Finish' : 'Start' }}
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import TaskService from '@/services/TaskService.js';
import TaskTypeService from '@/services/TaskTypeService';
import BranchService from '@/services/BranchService';
import moment from 'moment';


export default {
  components: { VDataTable },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'Id',
        key: 'id',
        align: 'start',
      },
      {
        title: 'Bezeichnung',
        key: 'label',
      },
      {
        title: 'Beschreibung',
        key: 'description',
      },
      {
        title: 'Aufgabentyp',
        key: 'taskType',
      },
      {
        title: 'Sparte',
        key: 'branch',
      },
      {
        title: 'Aufgabenbeschreibung',
        key: 'taskInstruction',
      },
      {
        title: 'Startdatum',
        key: 'startDate',
        // type: 'date',
        // dateInputFormat: 'yyy-MM-dd',
        // dateOutputFormat: 'yyy-MM-dd',
      },
      {
        title: 'Enddatum',
        key: 'endDate', 
        // type: 'date',
        // dateInputFormat: 'yyy-MM-dd',
        // dateOutputFormat: 'yyy-MM-dd',
      },
      {
        title: 'Status',
        key: 'status',
      },
      {
        title: 'Abbruchbemerkung',
        key: 'abortingRemark',
      },
      {
        title: 'Abschlussbemerkung',
        key: 'finishingRemark',
      },
      {
        title: 'Erstellt am',
        key: 'createdOn',
      },
      { title: 'Aktion', key: 'actions', sortable: false },
    ],
    tasks: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      label: '',
      description: '',
      taskType: null,
      branch: null,
      taskInstruction: '',
      startDate: new Date(),
      endDate: new Date(),
      status: 'planned',
      createdBy: 'admin',
      updatedBy: 'admin',
    },
    defaultItem: {
      label: '',
      description: '',
      taskType: null,
      branch: null,
      taskInstruction: '',
      startDate: new Date(),
      endDate: new Date(),
      status: 'planned',
      createdBy: 'admin',
      updatedBy: 'admin',
    },
    items: {
      branches: [],
      taskTypes: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Neue Aufgabe' : 'Aufgabe anpassen'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  async created() {
    this.getTasksData();
    this.getTaskTypeData();
    await this.getBranchesData();
  },

  methods: {
    initialize() {
    },

    async getTasksData() {
      try {
        const results = await TaskService.getTasks();
        this.tasks = results['task'];
      } catch (error) {
        console.log(error);
      }
    },

      async getTaskTypeData() {
      try {
        this.items.branches = [];
        const results = await TaskTypeService.getTaskTypes();
        results['taskType'].forEach(el => {
          this.items.taskTypes.push(el.name.toString());
        });
      } catch (error) {
        console.log(error);
      }
    },

      async getBranchesData() {
      try {
        this.items.branches = [];
        const results = await BranchService.getBranches();
        results['branch'].forEach(el => {
          this.items.branches.push(el.name.toString());
        });
      } catch (error) {
        console.log(error);
      }
    },

    editItem(item) {
      this.editedIndex = this.tasks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.tasks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      TaskService.deleteTask(this.editedItem.id);
      this.tasks.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      })
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      })
    },

    save() {
      if (
          this.editedItem.label === '' || this.editedItem.label == null ||
          this.editedItem.description === '' || this.editedItem.description == null ||
          this.editedItem.taskType === '' || this.editedItem.taskType == null ||
          this.editedItem.branch === '' || this.editedItem.branch == null ||
          this.editedItem.taskInstruction === '' || this.editedItem.taskInstruction == null ||
          this.editedItem.startDate === '' || this.editedItem.startDate == null ||
          this.editedItem.endDate === '' || this.editedItem.endDate == null 
        ) {
        alert('Alle Felder einer Aufgabe müssen ausgefüllt sein.');
        return;
      }
      let lTempObject = this.editedItem;
      lTempObject.startDate = moment(this.editedItem.startDate).format('YYYY-MM-DD hh:mm:ss') // moment.js
    
      lTempObject.endDate = moment(this.editedItem.endDate).format('YYYY-MM-DD hh:mm:ss') // moment.js

      if (this.editedIndex > -1) { // === updated object
        Object.assign(this.tasks[this.editedIndex], this.editedItem)
        TaskService.updateTask(this.editedItem.id, this.editedItem);
      } else { // === new object
        this.tasks.push(this.editedItem);
        TaskService.createTask(lTempObject);
      }
      this.close();
    },
  },
}
</script>