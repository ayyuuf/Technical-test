<template>
  <v-app-bar elevation="2">
    <v-btn icon>
      <v-iovn>fas fa-moon</v-iovn>
    </v-btn>
    <v-spacer></v-spacer>
    <div>
      <v-list-item>
        <v-list-item-icon>
          <!-- <v-icon>mdi-moon-waxing-crescent</v-icon> -->
          <font-awesome-icon :icon="['fat', 'moon']" />
        </v-list-item-icon>
        <v-list-item-avatar>
          <v-avatar tile>
            <img src="@/assets/avatar.png" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item>
          <v-list-item-title> User Inc </v-list-item-title>
        </v-list-item>

        <v-btn icon>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-list-item>
    </div>
  </v-app-bar>
</template>
<script></script>
