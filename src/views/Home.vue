<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <NavBar />
    <v-container id="home">
      <div class="content1">
        <v-row align="center">
          <v-col>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h2"
                  >Observe Your</v-list-item-title
                >
                <v-list-item-title class="text-h2">Power</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle
                  >Trafalgar provides progressive, and affordable healthcare,
                  accessible on
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  >mobile and online for everyone
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
            <v-img src="@/assets/img1.png" style="width: 650px"></v-img>
          </v-col>
        </v-row>
      </div>

      <div class="content2" id="product">
        <v-row align="center" justify="center">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h4"
                  >Why choose us?</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >We provide to you the best choiches for you. The leading
                </v-list-item-title>
                <v-list-item-subtitle>
                  political campaign intelligence platform</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>

        <v-row>
          <v-col v-for="(item, id) in items" :key="id">
            <v-card class="rounded-xl" outlined style="height: 35vh">
              <v-list>
                <v-list-item>
                  <v-img :src="item.url"></v-img>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.title"
                      class="font-weight-bold"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      v-text="item.subtitle1"
                      class="black--text"
                    >
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="item.subtitle2"
                      class="black--text"
                    >
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center mb-6">
          <v-btn
            height="50"
            min-width="164"
            rounded
            outlined
            class="text-capitalize"
          >
            Learn More
          </v-btn>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  data: () => ({
    items: [
      {
        url: "../assets/icon1.png",
        title: "Data",
        subtitle1: "The biggest regional data, ",
        subtitle2: "development, and POI data.",
      },
      {
        url: "../assets/icon2.png",
        title: "Technology",
        subtitle1: "Geospatial platform with advanced",
        subtitle2: "analysis that suit your neetds.",
      },
      {
        url: "../assets/icon3.png",
        title: "Service",
        subtitle1: "An expert team help you to analyze ",
        subtitle2: "your poltical power.",
      },
    ],
  }),

  methods: {},
  components: {
    NavBar,
  },
};
</script>
<style>
.img1 {
  width: 600px;
}

.content2 {
  padding-top: 250px;
}

.content1 {
  padding-top: 150px;
}
</style>
