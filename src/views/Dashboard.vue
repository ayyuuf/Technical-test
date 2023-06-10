<template>
  <v-app>
    <SideBar />
    <div class="content">
      <v-container fluid style="max-width: 160vh">
        <v-row>
          <v-col>
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <highcharts :options="ChartOptions1"></highcharts>
            </v-card>
          </v-col>
          <v-col>
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <highcharts :options="ChartOptions2"></highcharts>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <highcharts :options="ChartOptions3"></highcharts>
            </v-card>
          </v-col>
          <v-col>
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <highcharts :options="ChartOptions4"></highcharts>
            </v-card>
          </v-col>
          <v-col>
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <highcharts :options="ChartOptions5"></highcharts>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" color="white" class="rounded-lg">
            <v-card style="height: 50vh">
              <highcharts :options="ChartOptions5"></highcharts>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8">
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <v-subheader></v-subheader>
              <highcharts :options="ChartOption7"></highcharts>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  data: () => ({
    ChartOptions1: {
      chart: {
        type: "spline",
      },
      title: {
        text: "Jumlah Penduduk",
        align: "left",
      },

      yAxis: {},

      xAxis: {
        accessibility: {},
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },

      series: [
        {
          name: "Installation & Developers",
          data: [
            43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
            161454, 154610,
          ],
        },
      ],
    },
  }),

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
