import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/home.vue';
import About from '../components/about.vue';
import Movies from '../components/movies.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/movies', component: Movies}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;