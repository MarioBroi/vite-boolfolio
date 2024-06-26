import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppSkill from "./views/AppSkill.vue";
import AppProjects from "./views/AppProjects.vue";
import AppEducation from "./views/AppEducation.vue";
import AppContacts from "./views/AppContacts.vue";
import SingleProject from "./views/SingleProject.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/skill',
            name: 'skill',
            component: AppSkill,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/education',
            name: 'education',
            component: AppEducation,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts,
        },
        {
            path: '/project/:id',
            name: 'single-project',
            component: SingleProject,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
})

export default router;