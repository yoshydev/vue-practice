import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/veevalidate",
      name: "veevalidate",
      component: () => import("./views/VeeValidate.vue")
    },
    {
      path: "/veevalidate2",
      name: "veevalidate2",
      component: () => import("./views/VeeValidate2.vue")
    }
  ]
});
