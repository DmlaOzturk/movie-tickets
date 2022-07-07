import Vue from "vue";
import VueRouter from "vue-router";
import HomePageView from "../views/HomePageView.vue";
import MovieModalView from "../views/MovieModalView.vue";
import SearchView from "../views/SearchView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
  {
    path: "/login",
    name: "loginView",
    component: LoginView,
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUpView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
