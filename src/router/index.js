import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: () => import("../views/CursosView.vue"),
  },
  {
    path: "/curso/:id",
    name: "curso",
    component: () => import("../views/CursoByIdView.vue"),
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/ContatoView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
