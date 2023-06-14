<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <NavBar />
    <!-- halaman home -->
    <v-container id="home" class="content1">
      <v-row align="center">
        <v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h2 font-weight-medium"
                >Observe Your</v-list-item-title
              >
              <v-list-item-title class="text-h2 font-weight-bold"
                >Power</v-list-item-title
              >
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
          <v-list-item style="padding-top: 10px">
            <v-btn
              height="50"
              min-width="164"
              rounded
              color="primary"
              dark
              class="text-capitalize"
            >
              See a Demo
            </v-btn>
          </v-list-item>
        </v-col>
        <v-col>
          <v-img src="@/assets/img1.png" style="width: 650px"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- halaman product -->
    <v-container>
      <div class="content2" id="product">
        <v-row>
          <div align="center" class="div">
            <h1 class="font-weight-bold">Why choose us?</h1>
            <p style="padding-top: 20px">
              We provide to you the best choiches for you. The leading <br />
              political campaign intelligence platform .
            </p>
          </div>
        </v-row>

        <v-row style="padding-top: 20px">
          <v-col>
            <v-card class="rounded-xl" outlined style="height: 40vh">
              <div style="padding-top: 80px; margin-left: 50px">
                <v-img src="@/assets/icon1.png" style="width: 100px"></v-img>
                <v-card-title class="text-h5 font-weight-bold"
                  >Data</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >The biggest regional data,<br />
                  development, and POI data.</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>

          <v-col>
            <v-card class="rounded-xl" outlined style="height: 40vh">
              <div style="padding-top: 80px; margin-left: 50px">
                <v-img src="@/assets/icon2.png" style="width: 100px"></v-img>
                <v-card-title class="text-h5 font-weight-bold"
                  >Technology</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >Geospatial platform with advanced <br />
                  analysis that suit your neetds.</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>

          <v-col>
            <v-card class="rounded-xl" outlined style="height: 40vh">
              <div style="padding-top: 80px; margin-left: 50px">
                <v-img src="@/assets/icon3.png" style="width: 100px"></v-img>
                <v-card-title class="text-h5 font-weight-bold"
                  >Service</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >An expert team help you to analyze <br />
                  your poltical power.</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="learn justify-center">
          <v-btn
            height="50"
            min-width="164"
            rounded
            outlined
            class="text-capitalize"
            color="primary"
          >
            Learn More
          </v-btn>
        </v-row>
      </div>
    </v-container>
    <!-- halaman overview -->
    <div class="overview">
      <div>
        <v-container>
          <v-row>
            <v-col>
              <v-img src="@/assets/overview1.png" style="width: 400px"></v-img>
            </v-col>
            <v-col>
              <div style="padding-top: 300px">
                <h1 class="font-weight-bold" style="color: white">
                  App Overview 1
                </h1>
                <p style="color: white">
                  Advanced spatial analysis to understand where and why <br />
                  things happen, identify the target constituency, and optimize
                  <br />
                  the campaign.
                </p>
              </div>
              <v-btn
                height="50"
                min-width="164"
                rounded
                outlined
                class="text-capitalize"
                color="white"
              >
                Learn More
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div style="padding-top: 150px">
        <v-container>
          <v-row>
            <v-col>
              <div style="padding-top: 250px">
                <h1 class="font-weight-bold" style="color: white">
                  App Overview 2
                </h1>
                <p style="padding-top: 20px; color: white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  <br />
                  do amet sint. Velit officia consequat duis enim velit
                  mollit.<br />
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <v-btn
                height="50"
                min-width="164"
                rounded
                outlined
                class="text-capitalize"
                color="white"
              >
                Learn More
              </v-btn>
            </v-col>
            <v-col>
              <v-img src="@/assets/overview2.png" style="width: 500px"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div style="padding-top: 150px">
        <v-container>
          <v-row>
            <v-col>
              <v-img src="@/assets/overview3.png" style="width: 500px"></v-img>
            </v-col>
            <v-col>
              <div>
                <h1 class="font-weight-bold" style="color: white">
                  App Overview 3
                </h1>
                <p style="padding-top: 20px; color: white">
                  Advanced spatial analysis to understand where and why <br />
                  things happen, identify the target constituency, and optimize
                  <br />
                  the campaign.
                </p>
              </div>
              <v-btn
                height="50"
                min-width="164"
                rounded
                outlined
                class="text-capitalize"
                color="white"
              >
                Learn More
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <!-- halaman blog -->

    <div style="padding-top: 100px" id="blog">
      <v-container>
        <v-row align="center">
          <div align="center" class="div">
            <h1 class="font-weight-bold">How it works for you?</h1>
            <p style="padding-top: 20px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              <br />
              do eiusmod tempor incididunt ut labore et dolore magna <br />
              aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </v-row>
        <v-row class="learn justify-center">
          <v-btn
            height="50"
            min-width="164"
            rounded
            color="primary"
            dark
            class="text-capitalize"
          >
            See a Demo
          </v-btn>
        </v-row>

        <v-row style="padding-top: 100px">
          <v-col align="center">
            <v-card
              class="rounded-xl"
              outlined
              style="height: 60vh; width: 50vh"
            >
              <div style="padding-top: 20px">
                <v-img
                  src="@/assets/geographic.png"
                  style="width: 500px"
                ></v-img>
                <v-card-title class="text-h5 font-weight-bold justify-center"
                  >Geographic Segmentation</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >Consist of creating differend groups of <br />
                  customers based on geographic<br />
                  boundaries</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>

          <v-col align="center">
            <v-card
              class="rounded-xl"
              outlined
              style="height: 60vh; width: 50vh"
            >
              <div style="padding-top: 20px">
                <v-img
                  src="@/assets/demographic.png"
                  style="width: 500px"
                ></v-img>
                <v-card-title class="text-h5 font-weight-bold justify-center"
                  >Demographic Segmentation</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >Consist of dividing the market through different <br />
                  variables such as age, gender, income, etc</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row style="padding-top: 20px">
          <v-col align="center">
            <v-card
              class="rounded-xl"
              outlined
              style="height: 60vh; width: 50vh"
            >
              <div style="padding-top: 20px">
                <v-img
                  src="@/assets/psychographic.png"
                  style="width: 500px"
                ></v-img>
                <v-card-title class="text-h5 font-weight-bold justify-center"
                  >Psychograpich Segmentation</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >Consist of creating differend groups of <br />
                  customers based on geographic <br />
                  boundaries</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>

          <v-col align="center">
            <v-card
              class="rounded-xl"
              outlined
              style="height: 60vh; width: 50vh"
            >
              <div style="padding-top: 20px">
                <v-img
                  src="@/assets/behavorial.png"
                  style="width: 500px"
                ></v-img>
                <v-card-title class="text-h5 font-weight-bold justify-center"
                  >Behavorial Segmentation</v-card-title
                >
                <v-card-subtitle style="padding-top: 20px"
                  >Consist of creating differend groups of <br />
                  customers based on geographic <br />
                  boundaries</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>
          <!-- <v-col v-for="(item, id) in items" :key="id">
            <v-card class="rounded-xl" outlined style="wi">
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
          </v-col> -->
        </v-row>
      </v-container>
    </div>

    <!-- halaman pricing -->
    <div id="pricing" style="padding-top: 100px">
      <v-container>
        <v-row>
          <div align="center" class="div">
            <h1 class="font-weight-bold">Plans and Pricing</h1>
            <p style="padding-top: 20px">
              We provide to you the best choiches for you. The leading<br />
              political campaign intelligence platform
            </p>
          </div>
        </v-row>
        <v-row style="padding-top: 20px">
          <v-col style="margin-left: 100px">
            <v-card
              class="rounded-xl"
              outlined
              style="height: 85vh; width: 40vh"
            >
              <div style="padding-top: 80px">
                <v-img
                  src="@/assets/princing.png"
                  style="width: 200px; margin-left: 90px"
                >
                </v-img>
                <v-card-title class="justify-center"
                  >Individual Plan</v-card-title
                >
                <v-list style="margin-left: 70px">
                  <v-list-item v-for="(item, i) in items1" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon1" style="color: green"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.text1"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <h2 align="center" style="padding-top: 80px">$99 / mo</h2>
                <v-row class="learn justify-center">
                  <v-btn
                    height="40"
                    min-width="164"
                    rounded
                    outlined
                    class="text-capitalize font-weight-medium"
                    color="primary"
                  >
                    Select
                  </v-btn>
                </v-row>
              </div>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="rounded-xl"
              outlined
              style="height: 85vh; width: 40vh"
            >
              <div style="padding-top: 80px">
                <v-img
                  src="@/assets/princing.png"
                  style="width: 200px; margin-left: 90px"
                >
                </v-img>
                <v-card-title class="justify-center"
                  >Individual Plan</v-card-title
                >
                <v-list style="margin-left: 70px">
                  <v-list-item v-for="(item, i) in items2" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon2" style="color: green"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.text2"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <h2 align="center" style="padding-top: 30px">$500 / mo</h2>
                <v-row class="learn justify-center">
                  <v-btn
                    height="40"
                    min-width="164"
                    rounded
                    outlined
                    class="text-capitalize font-weight-medium"
                    color="primary"
                  >
                    Select
                  </v-btn>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- halaman contact/question -->
    <v-container>
      <div class="content2" id="contact">
        <v-row>
          <div align="center" class="div">
            <h1 class="font-weight-bold">Frequenly Asked Questions</h1>
          </div>
        </v-row>

        <v-row style="padding-top: 20px">
          <v-col style="margin-left: 250px">
            <v-card outlined style="height: 20vh; width: 75vh">
              <div style="margin-left: 20px">
                <v-card-title
                  style="padding-top: 30px; color: #2161d5"
                  class="text-subtitle-1 font-weight-bold"
                  >What do you mean by public-facing usage?</v-card-title
                >
                <v-card-subtitle
                  class="text-subtitle-1"
                  style="padding-top: 10px"
                  >We define public-facing usage as leveraging CARTO to power
                  enterprise-scale<br />
                  applications that are made available to external parties such
                  as clients or the public, as <br />
                  opposed to internal demonstration-only
                  applications.</v-card-subtitle
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, id) in contac"
            :key="id"
            style="margin-left: 250px"
          >
            <v-card outlined style="width: 75vh">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.title"
                      class="font-weight-medium"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-btn>
                    <v-btn text>
                      <v-icon v-text="item.icon" color="black" large></v-icon>
                    </v-btn>
                  </v-list-item-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="learn justify-center">
          <v-btn
            height="50"
            min-width="164"
            rounded
            outlined
            class="text-capitalize"
            color="primary"
          >
            Add Question
          </v-btn>
        </v-row>
        <v-row style="padding-top: 60px">
          <v-card style="width: 150vh; height: 30vh" color="#2161d5" rounded>
            <div style="padding-top: 40px">
              <v-row>
                <v-col>
                  <div style="margin-left: 90px; padding-top: 40px">
                    <h1 style="color: white">
                      Subscribe Now for <br />
                      Get Special Features!
                    </h1>
                    <p style="color: white">
                      Let's subscribe with us and find the fun.
                    </p>
                  </div>
                </v-col>
                <v-col align="center">
                  <div style="padding-top: 70px">
                    <v-btn
                      depressed
                      color="white"
                      light
                      height="60"
                      width="300"
                      class="text-capitalize pry=imary"
                    >
                      Subscribe Now
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-row>
      </div>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  data: () => ({
    items1: [
      { icon1: "mdi-check", text1: "1 User" },
      { icon1: "mdi-check", text1: "1 Basic Analysis" },
      { icon1: "mdi-check", text1: "Unlimited Select Services" },
    ],
    items2: [
      { icon2: "mdi-check", text2: "Unlimited User" },
      { icon2: "mdi-check", text2: "Basic Analysis" },
      { icon2: "mdi-check", text2: "Unlimited Select Services" },
      { icon2: "mdi-check", text2: "Free extend 1 Month" },
    ],
    contac: [
      {
        title: "Can i  buy more storage for my individual plan?",
        icon: "mdi-plus",
      },
      {
        title:
          "What happens to my data after the trial or if i cancel my subscription?",
        icon: "mdi-plus",
      },
      {
        title: "Can i cancel my monthly or annual subscription?",
        icon: "mdi-plus",
      },
    ],
  }),

  methods: {},
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
.img1 {
  width: 600px;
}

.content2 {
  padding-top: 150px;
  padding-bottom: 200px;
}

.content1 {
  padding-top: 150px;
}
.div {
  margin-left: 400px;
}

.learn {
  padding-top: 30px;
}
.overview {
  width: 200vh;
  height: 200vh;
  background: linear-gradient(to top, #2161d5 95%, #ffffff 95%);
}
</style>
