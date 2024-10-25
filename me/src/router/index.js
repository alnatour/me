import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/service",
      name: "service",
      component: () => import("../views/ServiceView.vue"),
    },
    {
      path: "/service-single",
      name: "service-single",
      component: () => import("../views/ServiceSingleView.vue"),
    },
    {
      path: "/our-technologies",
      name: "Our technologies",
      component: () => import("../views/OurTechnologiesView.vue"),
    },
    {
      path: "/terms-and-conditions",
      name: "Terms and Conditions",
      component: () => import("../views/TermsAndConditionsView.vue"),
    },
  ],
  
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
});

export default router;
