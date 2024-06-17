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
        {
          path: "/products",
          name: "products",
          component: () => import("@/views/ProductsView.vue"),
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/LoginView.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/views/RegisterView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  next(); // Continúa con la navegación normalmente
});

export default router;
