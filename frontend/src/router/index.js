import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/layout';
import FindMusic from '../views/music/find-music.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/find-music',
        name: 'find-music',
        component: FindMusic,
      },
      {
        path: '',
        redirect: { name: 'find-music' },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
