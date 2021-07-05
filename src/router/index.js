import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
    meta: {
        title: 'Revista Tempo'
    }
  },
  {
    path: "/:type/:permalink",
    name: "App",
    component: App,
    meta: {
        title: 'Revista Tempo'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;