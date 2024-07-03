import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import About from "@/view/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:id",
    component: About,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
