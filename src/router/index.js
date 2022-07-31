import Vue from "vue";
import VueRouter from "vue-router";
import HomePageView from "../views/HomePageView.vue";
import MovieModalView from "../views/MovieModalView.vue";
import SearchView from "../views/SearchView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:modal",
    name: "home",
    component: HomePageView,
  },
  {
    path: "/movie/:id",
    name: "movieModal",
    component: MovieModalView,
  },
  {
    path: "/search/movie",
    name: "searchView",
    component: SearchView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
