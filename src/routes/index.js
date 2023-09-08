import { createRouter, createWebHistory } from 'vue-router';


const Home = () => import( '../components/home.vue');
const About = () => import( '../components/about.vue');


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/movies', component: () => import( '../components/movies.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;