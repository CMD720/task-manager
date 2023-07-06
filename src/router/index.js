import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Tasks from "@/pages/Tasks.vue";
import View from "@/pages/View.vue";
import store from "@/store";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tasks',
        component: Tasks
    },
    {
        path: '/tasks/view',
        name: 'view',
        component: View,
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
router.beforeEach((to, from, next) => {
    if (to.fullPath !== '/' && !store.state.login.auth) next('/')
    else next()
})
export default router