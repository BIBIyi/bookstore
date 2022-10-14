import Vue from 'vue'
import VueRouter from 'vue-router'
import * as home from "../homepage.vue";
import * as login from "../view/login.vue";

Vue.use(VueRouter)

const routers = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        component: home
    },


]

export default routers

