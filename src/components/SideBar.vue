<template>
  <v-navigation-drawer app dark color="#2A3042">
    <div class="text-center mt-5">
      <v-img class="mx-auto" src="@/assets/logo.png" width="150px"></v-img>
    </div>

    <v-list flat>
      <v-subheader>DATA</v-subheader>
      <v-list-item-group v-model="selectedItem" color="black">
        <v-list-item v-for="(item1, i) in items1" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item1.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item1.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="black">
        <v-list-item v-for="(item2, n) in items2" :key="n">
          <v-list-item-icon>
            <v-icon v-text="item2.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item2.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items1: [
      { text: "Visualization", icon: "mdi-archive-outline" },
      { text: "Case", icon: "mdi-archive-outline" },
      { text: "Data Set", icon: "mdi-flag" },
      { text: "Data Source", icon: "mdi-flag" },
      { text: "Connection", icon: "mdi-flag" },
    ],
    items2: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
  methods: {},
};
</script>

<style>
.text-sidebar {
  font-family: "Poppins", sans-serif;
}
.list-card {
  margin-bottom: 35vh;
}
</style>
