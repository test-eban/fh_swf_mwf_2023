<template>
  <v-data-table :headers="headers" :items="tasks" :sort-by="[{ key: 'label', order: 'asc' }]" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark class="mb-2" v-bind="props">
              New Item
            </v-btn>
          </template>
          <v-card>
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
                    <v-text-field v-model="editedItem.taskType" label="Tasktyp"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.branch" label="Sparte"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model="editedItem.taskInstruction" label="Arbeitsanweisung"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                      <!--v-text-field v-model="editedItem.startDate" label="Start"></v-text-field-->
                      <v-date-picker v-model="editedItem.startDate" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                      </v-date-picker>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                      <v-text-field v-model="editedItem.branch" label="Sparte"></v-text-field>
                      <v-combobox
                        label="Combobox"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        variant="solo"
                      ></v-combobox>
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
            <v-card-title class="text-h5">Sind Sie sicher, dass Sie diese Aufgabe löschen wollen??</v-card-title>
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
      <v-icon size="small" class="me-2" @click="editItem(item.raw)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)">
        mdi-delete
      </v-icon>
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
import TaskService from '@/services/TaskService';

export default {
  components: { VDataTable },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'Bezeichnung',
        key: 'label',
        align: 'start',
        sortable: false,
      },
      {
        title: 'Beschreibung',
        key: 'description',
      },
      {
        title: 'Tasktyp',
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
      label: '',
      description: '',
      taskType: null,
      branch: null,
      taskInstruction: '',
      startDate: new Date(),
      endDate: new Date(),
      status: 0,
    },
    defaultItem: {
      label: '',
      description: '',
      taskType: null,
      branch: null,
      taskInstruction: '',
      startDate: new Date(),
      endDate: new Date(),
      status: 0,
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

  created() {
    this.getTasksData()
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

    editItem(item) {
      this.editedIndex = this.tasks.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.tasks.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.tasks.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tasks[this.editedIndex], this.editedItem)
      } else {
        this.tasks.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>