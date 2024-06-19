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
          path: "/detail_product/:id",
          name: "detail_product",
          component: () => import("@/views/DetailProductView.vue"),
          beforeEnter: (to, from, next) => {
            const hasIdParam = to.params.id;
            if (!hasIdParam) {
              next({ name: "home" }); // Redirige a 'home' si no hay ID
            } else {
              next();
            }
          },
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/trolley",
          name: "trolley",
          component: () => import("@/views/TrolleyView.vue"),
        },
        {
          path: "/checkout",
          name: "checkout",
          component: () => import("@/views/CheckoutView.vue"),
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
