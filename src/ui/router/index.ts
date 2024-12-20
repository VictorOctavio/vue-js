import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "../models/routes.model";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: Routes.Home,
            component: () => import("../views/private/DashboardView.vue")
        },
        {
            path: "/tasks",
            name: Routes.Tasks,
            component: () => import("../views/private/TasksListView.vue")
        },
        {
            path: "/register",
            name: Routes.Register,
            component: () => import("../modules/register/views/RegisterView.vue")
        },
        {
            path: "/login",
            name: Routes.Login,
            component: () => import("../views/public/LoginView.vue")
        },
        {
            path: "/calculate",
            name: Routes.Calculate,
            component: () => import("../modules/calculate/views/CalculateView.vue")
        }
    ]
})

export default router;