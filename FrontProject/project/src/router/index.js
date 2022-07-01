import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Auth from "../views/Auth.vue";
import Inscrip from "../views/Inscrip.vue";
import Ins_Res from "../views/Ins_Res.vue";
import Compte from "../views/Compte.vue"
import Restaurant from "../views/Restaurant.vue"
import Ins_Liv from "../views/Ins_Liv.vue"


const routes = [{
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
    {
        path: "/",
        name: "Compte",
        component: Compte,
    },
    {
        path: "/",
        name: "Restaurant",
        component: Restaurant,
    },
    {
        path: "/",
        name: "Ins_Liv",
        component: Ins_Liv,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;