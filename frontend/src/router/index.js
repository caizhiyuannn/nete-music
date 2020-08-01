import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/layout';
import Discovery from '../views/music/discovery';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/discovery',
        name: 'discovery',
        component: Discovery,
      },
      {
        path: '/radio',
        name: 'radio',
        component: () => import('@/views/PlayList.vue'),
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video'),
      },
      {
        path: '/playlist',
        name: 'playlist',
        component: () => import('@/views/PlayList.vue'),
        props: true,
      },
      {
        path: '',
        redirect: { name: 'discovery' },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
