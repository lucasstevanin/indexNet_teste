import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import bootstrap from "./bootstrap";
import DomainName from "./components/DomainName.vue";
import TimeOpen from "./components/TimeOpen.vue";
import ChooseCategories from "./components/ChooseCategories.vue";
import ChooseProducts from "./components/ChooseProducts.vue";
import SiteFinished from "./components/SiteFinished.vue";

const routes = [
  {
    path: "/",
    name: "DomainNome",
    component: DomainName,
  },
  {
    path: "/timeOpen",
    name: "TimeOpen",
    component: TimeOpen,
  },
  {
    path: "/categories",
    name: "ChooseCategories",
    component: ChooseCategories,
  },
  {
    path: "/products",
    name: "ChooseProducts",
    component: ChooseProducts,
  },
  {
    path: "/finished",
    name: "SiteFinished",
    component: SiteFinished,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(bootstrap);
app.use(router);
app.mount("#app");
