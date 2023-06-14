<template>
  <v-app>
    <SideBar />
    <AppBar />
    <div class="content">
      <v-row style="padding-top: 40px; margin-left: 50px">
        <p class="text-h6">USER MANAGEMENT</p>
        <v-spacer></v-spacer>
        <p style="margin-right: 30px">Logoipsum /Usermanagement</p>
      </v-row>
      <v-container
        fluid
        style="max-width: 160vh; padding-top: 20px; height: 100vh"
      >
        <v-div style="margin-left: 30px">
          <v-row>
            <v-text-field
              class="mx-4"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search By  Name"
              solo
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              height="50"
              width="150"
              class="text-capitalize mr-4"
              color="#3A70D9"
              dark
              @click="dialog = true"
            >
              Add User
            </v-btn>
          </v-row>
        </v-div>
        <div style="padding-top: 50px">
          <v-data-table
            :headers="headers"
            :items="data"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <!--        Dialog Edit-->
            <v-dialog v-model="dialogEdit" persistant max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline"> Update Data Project </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          :rules="Text2"
                          label="Name"
                          v-model="editName"
                          required
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          :rules="Text3"
                          label="Username"
                          v-model="editUsername"
                          required
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          disabled
                          label="Email"
                          v-model="editEmail"
                          required
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          disabled
                          label="Gender"
                          v-model="editGender"
                          required
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-draken-1" text @click="dialogEdit = false"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue-draken-1" text @click="updateProject"
                    >Change</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!--        Dialog Delete-->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-draken-1"
                    text
                    @click="dialogDelete = false"
                    >Add</v-btn
                  >
                  <v-btn color="blue-draken-1" text @click="deleteUser()"
                    >Delete</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item-group v-model="selectedItem">
                    <v-list-item @click="editItem(item)">
                      <v-list-item-icon>
                        <v-icon>mdi-pencil</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="deleteItem(item)">
                      <v-list-item-icon>
                        <v-icon>mdi-delete</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Delete </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <div class="text-center pt-2" style="margin-left: 1400px">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppBar from "@/components/AppBar.vue";
import axios from "axios";

export default {
  data: () => ({
    name: "",
    username: "",
    email: "",
    gender: "",
    editName: "",
    editUsername: "",
    editEmail: "",
    editGender: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      {
        text: "Name",
        value: "name",
      },
      { text: "Username", value: "username" },
      { text: "Email", value: "email" },
      { text: "Gender", value: "gender" },
      { text: " Last Update", value: "last_update" },
      { text: "Actions", value: "actions" },
    ],
    data: [
      {
        name: "Frozen Yogurt",
        username: 159,
        email: 6.0,
        gender: 24,
        last_update: 4.0,
        action: 1,
      },
      {
        name: "Frozen Yogurt",
        username: 159,
        email: 6.0,
        gender: 24,
        last_update: 4.0,
        action: 1,
      },
      {
        name: "Frozen Yogurt",
        username: 159,
        email: 6.0,
        gender: 24,
        last_update: 4.0,
        action: 1,
      },
      {
        name: "Frozen Yogurt",
        username: 159,
        email: 6.0,
        gender: 24,
        last_update: 4.0,
        action: 1,
      },
      {
        name: "Frozen Yogurt",
        username: 159,
        email: 6.0,
        gender: 24,
        last_update: 4.0,
        action: 1,
      },
    ],
  }),
  methods: {},

  components: {
    SideBar,
    AppBar,
  },
};
</script>

<style scoped>
.content {
  background-color: #f5f6fa;
}
</style>
