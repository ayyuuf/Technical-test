<template>
  <v-footer padless>
    <v-container fluid>
      <div style="padding-top: 70px">
        <v-row>
          <v-col>
            <div style="margin-left: 100px">
              <v-img
                src="@/assets/geolabs.png"
                style="width: 200px; margin-left: 50px"
              ></v-img>
              <v-list-item style="margin-left: 60px; padding-top: 10px">
                <v-list-item-subtitle class="text-subtitle-1">
                  Geolabs is a private virtual network that has <br />
                  unique features and has high security.
                </v-list-item-subtitle>
              </v-list-item>
              <div style="padding-top: 50px; margin-left: 70px">
                <v-row>
                  <v-btn class="mx-2" fab dark small color="white">
                    <v-icon color="primary">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn class="mx-2" fab dark small color="white">
                    <v-icon color="primary">mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn class="mx-2" fab dark small color="white">
                    <v-icon color="primary">mdi-instagram</v-icon>
                  </v-btn>
                </v-row>
                <v-row style="padding-top: 30px; margin-left: 10px">
                  <p class="text-overline">©2020EBDESK</p>
                </v-row>
              </div>
            </div>
          </v-col>

          <v-col align="center">
            <div style="margin-left: 200px">
              <v-list-item>
                <v-list-item-title class="text-h6 font-weight-bold"
                  >Product</v-list-item-title
                >
              </v-list-item>
              <v-list-item v-for="(item, i) in items1" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text1"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>

          <v-col align="center">
            <div>
              <v-list-item>
                <v-list-item-title class="text-h6 font-weight-bold"
                  >Engage</v-list-item-title
                >
              </v-list-item>
              <v-list-item v-for="(item, a) in items2" :key="a">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text2"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>

          <v-col align="center">
            <div style="padding-right: 100px">
              <v-list-item>
                <v-list-item-title class="text-h6 font-weight-bold"
                  >Earn Money</v-list-item-title
                >
              </v-list-item>
              <v-list-item v-for="(item, b) in items3" :key="b">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text3"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    items1: [
      { text1: "Download " },
      { text1: "Pricing " },
      { text1: "Locations " },
      { text1: "Server " },
      { text1: "Countries " },
      { text1: "Blog " },
    ],
    items2: [
      { text2: "Geolabs ?  " },
      { text2: "FAQ " },
      { text2: "Tutorials " },
      { text2: "About Us " },
      { text2: "Privacy Policy " },
      { text2: "Terms of Service " },
    ],
    items3: [{ text3: "Affiliate " }, { text3: "Become Partner " }],
  }),
};
</script>
