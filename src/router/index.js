import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      meta: {
        title: "Home",
        requiresAuth: true,
      },
      path: "/",
      component: () => import("@/layouts/MasterLayout.vue"),
      children: [
        {
          name: "home",
          path: "",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
    {
      meta: {
        title: "Login",
      },
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  next(); // Continúa con la navegación normalmente
});

export default router;
