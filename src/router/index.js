import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFound from "../components/NotFound.vue";
import AboutUs from "../components/AboutUs.vue";
import Dashboard from "../views/Dashboard.vue";
import UserManagement from "../views/UserManagement.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/NotFound",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/AboutUs",
    name: "aboutus",
    component: AboutUs,
  },
  {
    path: "/Dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/UserManagement",
    name: "usermanagement",
    component: UserManagement,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
