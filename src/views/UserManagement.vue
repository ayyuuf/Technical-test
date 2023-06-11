<template>
  <v-app>
    <SideBar />
    <div class="content">
      <v-container>
        <table></table>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  data: () => ({}),

  methods: {},
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.content {
  background-color: #f5f6fa;
}
</style>
