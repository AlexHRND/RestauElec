import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Auth from "../views/Auth.vue";
import Inscrip from "../views/Inscrip.vue";
import Ins_Res from "../views/Ins_Res.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/",
    name: "Inscrip",
    component: Inscrip,
  },
  {
    path: "/",
    name: "Ins_Res",
    component: Ins_Res,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
