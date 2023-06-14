<template>
  <div class="content">
    <v-container fluid style="max-width: 200vh">
      <v-img src="@/assets/logo.png" class="logo"></v-img>
      <v-row>
        <v-col cols="6" md="4" class="side">
          <v-img src="@/assets/login.png" style="width: 500px"></v-img>
          <h2 align="center">Service</h2>
          <div class="text--primary" align="center">
            An expert team help you to analyze your polticalt.<br />
            power.An expert team .
          </div>
        </v-col>

        <v-col cols="12" md="4" class="loginform">
          <v-layout class="align-center justify-center">
            <v-flex>
              <v-card elevation="0" color="white" style="width: 60vh">
                <h2>Welcome to Logo ipsum</h2>
                <div style="padding-top: 5px">
                  Dont’ have an account?
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a
                        target="_blank"
                        href="https://vuetifyjs.com"
                        @click.stop
                        v-on="on"
                      >
                        Sign Up
                      </a>
                    </template>
                    Opens in new window
                  </v-tooltip>
                </div>

                <div style="padding-top: 20px">
                  <form ref="form" @submit.prevent="login()">
                    <div class="font-weight-bold">Username</div>
                    <v-text-field
                      v-model="username"
                      name="username"
                      type="text"
                      class="username"
                      required
                      outlined
                    ></v-text-field>

                    <div class="font-weight-bold">Password</div>
                    <v-text-field
                      type="password"
                      v-model="password"
                      name="password"
                      class="password"
                      outlined
                    ></v-text-field>
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Remember Me"
                      required
                    ></v-checkbox>
                    <div class="text-center">
                      <v-btn
                        @click="handleSubmit"
                        class="mt-4"
                        block
                        depressed
                        large
                        color="#4F6499"
                        dark
                        value="log in"
                        >Login</v-btn
                      >
                    </div>
                  </form>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>

      <div class="legal">
        <p>©2020 All Rights Reserved. PT Indonesia Indicator</p>
      </div>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "loginPage",
  data: () => ({
    username: "",
    password: "",
    checkbox: false,
  }),
  methods: {
    async handleSubmit() {
      const response = await axios
        .post("https://dummyjson.com/auth/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if ((res.data.status = "success")) {
            const token = res.data.token;
            sessionStorage.setItem("token", true);
            this.$router.push("/Dashboard");
          }
        })
        .catch((err) => {
          alert({
            text: "looks like the username or password you entered is wrong!",
          });
        });
    },
  },
};
</script>
<style scoped>
.content {
  width: 200vh;
  height: 100vh;
  background: linear-gradient(to left, white 70%, #f5f6fa 70%);
}

.loginform {
  margin-left: 300px;
  padding-top: 200px;
}

.side {
  padding-top: 150px;
  margin-left: 5px;
}

.logo {
  width: 150px;
  margin-left: 20px;
}

.legal {
  padding-top: 190px;
}
</style>
