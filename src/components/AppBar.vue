<template>
  <v-app-bar elevation="2">
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-moon-waxing-crescent</v-icon>
        </v-list-item-icon>
        <v-list-item-avatar>
          <v-avatar tile>
            <img src="@/assets/avatar.png" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item>
          <v-list-item-title> User Inc </v-list-item-title>
        </v-list-item>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="selectedItem">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logOut">
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Log out </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-list-item>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    logOut() {
      sessionStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>
