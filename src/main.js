import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Movies from './components/movies.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/movies', component: Movies}
];

const router = createRouter({
        history: createWebHistory(),
        routes
    });

createApp(App).use(router).mount('#app')
