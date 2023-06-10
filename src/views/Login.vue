<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col mb="4">
          <v-img
            class="logo"
            src="@/assets/logo.png"
            justify-space-around
          ></v-img>
          <div>
            <row>
              <v-col>
                <v-img
                  class="img"
                  src="@/assets/login.png"
                  justify-center
                ></v-img>
              </v-col>
            </row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script></script>
<style scoped>
.logo {
  width: 150px;
}

.img {
  width: 600px;
}
</style>
