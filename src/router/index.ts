import { createRouter, createWebHistory } from "vue-router";
import Todos from "../views/Todos.vue";
import About from "../views/About.vue"
import Header from "../components/Header.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        layout: Header
      },
      component:  Todos,
    },
    {
      path: "/about",
      name: "about",
      component:  About,
    },
  ],
});

export default router;
