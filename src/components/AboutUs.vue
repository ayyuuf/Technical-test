<template>
  <div class="content">
    <v-container>
      <div style="padding-top: 400px">
        <v-row>
          <v-col align="center">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="text-h1 font-weight-medium"
                  style="color: white"
                  >About Us</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-h6 font-weight-light"
                  style="color: white"
                  >A small company offering data-driven solutions for campaign
                  effectiveness <br />

                  using spatial data and detailed analysis of target audience
                  (voters). Use <br />

                  technology that unites spatial data science and political
                  science.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row class="learn justify-center">
              <v-btn
                height="50"
                min-width="164"
                rounded
                outlined
                class="text-capitalize"
                color="white"
              >
                Contact Us
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container>
      <div style="padding-top: 450px">
        <v-row>
          <v-col align="center">
            <v-img src="@/assets/about.png" style="width: 50px"></v-img>
            <p style="padding-top: 30px" class="text-subtitle-1">
              In just small steps you’ll connected directly to our technology.
              <br />
              Knowledge about your own-power, your rivals, <br />
              your voters, and your region in Election.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <p
            class="text-h3 font-weight-bold"
            style="margin-left: 500px; padding-top: 50px"
          >
            Our Advisors
          </p>
        </v-row>
        <v-row>
          <v-col align="center">
            <div style="padding-top: 50px; margin-left: 50px">
              <v-img src="@/assets/xavier.png" style="width: 300px"></v-img>
              <p class="text-h6" style="padding-top: 20px">Xavier Oswald</p>
              <p class="text-overline">co-founder, developer</p>
            </div>
          </v-col>

          <v-col align="center">
            <div style="padding-top: 50px; margin-left: 50px">
              <v-img src="@/assets/sara.png" style="width: 300px"></v-img>
              <p class="text-h6" style="padding-top: 20px">Sara Creighton</p>
              <p class="text-overline">co-founder, developer</p>
            </div>
          </v-col>

          <v-col align="center">
            <div style="padding-top: 50px; margin-left: 50px">
              <v-img src="@/assets/brandon.png" style="width: 300px"></v-img>
              <p class="text-h6" style="padding-top: 20px">Brandon Ogden</p>
              <p class="text-overline">Project manager</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <div style="padding-top: 100px">
        <v-row>
          <v-col align="center">
            <p class="text-h3 font-weight-bold">What Political Figure Say</p>
            <p style="padding-top: 30px" class="text-subtitle-1">
              These are the stories of political figure who have joined us with
              great <br />
              pleasure when using this crazy feature.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col style="margin-left: 250px">
          <v-card outlined style="height: 23vh" class="rounded-lg">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="@/assets/airlangga.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Airlangga Hartanto</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-caption"
                    >Menteri Koordinator dan Perekonomian RI
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-row style="margin-left: 20px">
              <p>
                Saya minta kepada segenap pengurus DPD,<br />
                provinsi, kabupten dan kota, untuk kita harus <br />
                memiliki roadmap 2024. Di tahun melakukan <br />
                penggalangan opini masyarakat
              </p>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined style="height: 23vh" class="rounded-lg">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="@/assets/jokiwi.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Joko Widodo</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-caption"
                    >Presiden RI
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-row style="margin-left: 20px">
              <p>
                Daerah merupakan bagian dari pemerintah <br />
                yang langsung berinteraksi dengan
              </p>
            </v-row>
          </v-card>
        </v-col>
        <v-col style="margin-right: 50px">
          <v-card outlined style="height: 23vh" class="rounded-lg">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="@/assets/puan.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Puan Maharani</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-caption"
                    >Ketua DPR dan Fraksi PDI Perjuangan
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-row style="margin-left: 20px">
              <p>
                Daerah merupakan bagian dari pemerintah <br />
                yang langsung berinteraksi dengan <br />
                masyarakat ketikaproses demokratisasi <br />
                berlangsung.
              </p>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="padding-bottom: 100px">
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
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  data: () => ({}),
  components: {
    Footer,
  },
};
</script>

<style scoped>
.content {
  background-color: #2161d5;
  height: 110vh;
}
</style>
