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
