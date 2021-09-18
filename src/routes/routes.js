import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/home';
import Curso from '../views/curso';
import Escola from '../views/escola';


const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/Curso',
        component: Curso
    },
    {
        path: '/Escola',
        component: Escola
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;