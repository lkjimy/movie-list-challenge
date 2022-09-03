import { createWebHistory, createRouter } from "vue-router";
import index from "~/pages/index.vue";
import movie from "~/pages/movie.vue";

const routes = [
  {
    path: "/",
    name: 'movies',
    component: index
  },
  {
    path: "/:movieId",
    name: 'movie',
    component: movie
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
