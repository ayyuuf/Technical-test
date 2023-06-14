<template>
  <v-app-bar
    app
    color="white"
    light
    flat
    class="px-12"
    align="center"
    justify="space-around"
  >
    <v-img class="logo" src="@/assets/logo.png" justify-space-around></v-img>
    <v-tabs
      color="blach"
      class="d-flex justify-center"
      v-model="tab"
      :transition="false"
      :reverse-transition="false"
    >
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab class="text-capitalize" @click="scroll('home')">Home</v-tab>
      <v-tab class="text-capitalize" @click="scroll('product')">Product</v-tab>
      <v-tab class="text-capitalize" @click="scroll('blog')">Blog</v-tab>
      <v-tab class="text-capitalize" @click="scroll('pricing')">Pricing</v-tab>
      <v-tab class="text-capitalize" @click="scroll('contact')">Contact</v-tab>
      <v-tab class="text-capitalize" @click="link('/About')">About Us</v-tab>
    </v-tabs>

    <v-btn text class="text-capitalize" link to="/Login"> Sign In </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="text-capitalize" outlined color="#2161D5" rounded>
      Sign Up
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.logo {
  width: 150px;
}
</style>
