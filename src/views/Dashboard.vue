<template>
  <v-app>
    <SideBar />
    <AppBar />
    <div class="content">
      <v-row style="padding-top: 40px; margin-left: 50px">
        <v-icon>mdi-home-outline</v-icon>
        <v-icon>mdi-chevron-right</v-icon>
        <v-text>Statistic</v-text>
        <v-icon>mdi-chevron-right</v-icon>
        <v-text>Wilayah</v-text>
      </v-row>
      <v-container fluid style="max-width: 160vh; padding-top: 20px">
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
            <v-card
              style="height: 50vh; width: 50vh"
              color="white"
              class="rounded-lg"
            >
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
              <highcharts :options="ChartOptions6"></highcharts>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8">
            <v-card style="height: 50vh" color="white" class="rounded-lg">
              <v-subheader></v-subheader>
              <highcharts :options="ChartOptions7"></highcharts>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppBar from "@/components/AppBar.vue";

import { Chart } from "highcharts-vue";

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
        visible: false,
      },

      legend: {
        layout: "vertical",
        enabled: false,
        verticalAlign: "middle",
      },

      series: [
        {
          data: [-100, -70, -100, 60, -10, 20, -100],
          color: "#2161D5",
        },
      ],
      credits: {
        enabled: false,
      },
    },

    ChartOptions2: {
      chart: {
        type: "column",
      },
      title: {
        text: "Prasarana Air Bersih ",
        align: "left",
      },
      xAxis: {
        visible: false,
      },
      yAxis: {},

      plotOptions: {
        column: {
          stacking: 10,
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          data: [4, 4, 2, 4, 4],
          color: "#2161D5",
        },
        {
          data: [null, null, null, null, null],
        },
        {
          data: [null, null, null, null, null],
        },
      ],
      credits: {
        enabled: false,
      },
    },

    ChartOptions3: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Jumlah Penduduk Tiap Dusun",
        align: "left",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          innerSize: "80%",
          colorByPoint: true,
          data: [
            {
              name: "Dusun 1",
              y: 70.67,
              sliced: true,
              selected: true,
              color: "#97ACD1",
              color: "#2161D5",
            },
            {
              name: "Dusun 2",
              y: 14.77,
              color: "#89AFE7",
            },
            {
              name: "Dusun 3",
              y: 4.86,
              color: "#898BE7",
            },
            {
              name: "Dusun 4",
              y: 2.63,
              color: "#97ACD1",
            },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    },
    ChartOptions4: {
      chart: {
        polar: true,
        widht: "300px",
      },

      title: {
        text: "Jumlah Penduduk Tiap Dusun",
        align: "left",
      },

      pane: {
        startAngle: 0,
        endAngle: 360,
      },

      xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
          format: "{value}°",
        },
        visible: false,
      },

      yAxis: {
        min: 0,
      },

      plotOptions: {
        series: {
          pointStart: 0,
          pointInterval: 45,
        },
        column: {
          pointPadding: 0,
          groupPadding: 0,
        },
      },
      legend: {
        enabled: false,
      },

      series: [
        {
          type: "column",
          color: "#2161D5",
          data: [8, 7, 6, 5, 4, 3, 2, 1],
          pointPlacement: "between",
        },
        {
          type: "line",
          color: "#8697A8",
          data: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
          type: "area",
          color: "#898BE7",
          data: [1, 8, 2, 7, 3, 6, 4, 5],
        },
      ],
      credits: {
        enabled: false,
      },
    },
    ChartOptions5: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Jumlah KK Tiap Dusun",
        align: "left",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          innerSize: "80%",
          colorByPoint: true,
          data: [
            {
              name: "Dusun 1",
              y: 70.67,
              sliced: true,
              selected: true,
              color: "#97ACD1",
              color: "#2161D5",
            },
            {
              name: "Dusun 2",
              y: 14.77,
              color: "#89AFE7",
            },
            {
              name: "Dusun 3",
              y: 4.86,
              color: "#898BE7",
            },
            {
              name: "Dusun 4",
              y: 2.63,
              color: "#97ACD1",
            },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    },
    ChartOptions6: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Jumlah Prasarana Umum",
        align: "left",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          innerSize: "80%",
          colorByPoint: true,
          data: [
            {
              name: "Sumur Desa",
              y: 40.67,
              sliced: true,
              selected: true,
              color: "#2161D5",
            },
            {
              name: "Olahraga",
              y: 30.77,
              color: "#97ACD1",
            },
            {
              name: "Pasar Desa",
              y: 10.86,
              color: "#898BE7",
            },
            {
              name: "Balai Pertemuan",
              y: 15.63,
              color: "#89AFE7",
            },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    },

    ChartOptions7: {
      chart: {
        type: "column",
      },
      title: {
        text: "Jumlah Penduduk Berdasarkan Gender 2022",
        align: "left",
      },

      xAxis: {
        categories: [
          "Dusun 1",
          "Dusun 2",
          "Dusun 3",
          "Dusun 4",
          "Dusun 5",
          "Dusun 6",
        ],
      },

      yAxis: [
        {
          // Primary axis
          className: "highcharts-color-0",
        },
      ],

      plotOptions: {
        column: {
          borderRadius: 5,
        },
        dataLabels: {
          enabled: true,
        },
      },

      series: [
        {
          data: [900, 1000, 250, 1300, 500, 100],
          color: "#2161D5",
        },
        {
          data: [1400, 1100, 1025, 1500, 550, 650],
          color: "#97ACD1",
        },
      ],
      credits: {
        enabled: false,
      },
    },
  }),

  components: {
    SideBar,
    AppBar,
    highcharts: Chart,
  },
};
</script>

<style scoped>
.content {
  background-color: #f5f6fa;
}
</style>
