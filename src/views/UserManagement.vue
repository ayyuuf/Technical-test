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
            ><template v-slot:item.actions="{ item }">
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
    // data: [
    //   {
    //     name: "Frozen Yogurt",
    //     username: 159,
    //     email: 6.0,
    //     gender: 24,
    //     last_update: 4.0,
    //     action: 1,
    //   },
    //   {
    //     name: "Frozen Yogurt",
    //     username: 159,
    //     email: 6.0,
    //     gender: 24,
    //     last_update: 4.0,
    //     action: 1,
    //   },
    //   {
    //     name: "Frozen Yogurt",
    //     username: 159,
    //     email: 6.0,
    //     gender: 24,
    //     last_update: 4.0,
    //     action: 1,
    //   },
    //   {
    //     name: "Frozen Yogurt",
    //     username: 159,
    //     email: 6.0,
    //     gender: 24,
    //     last_update: 4.0,
    //     action: 1,
    //   },
    //   {
    //     name: "Frozen Yogurt",
    //     username: 159,
    //     email: 6.0,
    //     gender: 24,
    //     last_update: 4.0,
    //     action: 1,
    //   },
    // ],
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
