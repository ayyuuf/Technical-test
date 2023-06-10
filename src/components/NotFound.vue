<template>
  <v-app>
    <NavBar />
    <v-container>
      <v-row align="center" class="content">
        <v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h2" bold>Ooops!</v-list-item-title>
              <v-list-item-title class="text-h2"
                >Page Not Found</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle
                >This page doesn`t exist or was removed
              </v-list-item-subtitle>
              <v-list-item-subtitle
                >We suggest you back to home
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-btn
              height="50"
              min-width="164"
              rounded
              color="primary"
              dark
              class="text-capitalize"
            >
              Learn More
            </v-btn>
          </v-list-item>
        </v-col>

        <v-col>
          <v-img src="@/assets/404.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  data: () => ({}),

  methods: {},
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.content {
  padding-top: 200px;
}
</style>
