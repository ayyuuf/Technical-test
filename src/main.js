import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon); // Register component globally
library.add(fas); // Include needed icons

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  icons: {
    iconfont: "faSvg",
  },
  render: (h) => h(App),
}).$mount("#app");
