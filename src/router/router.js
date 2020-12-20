import Vue from 'vue';
import Router from 'vue-router';
import FilmList from '../components/FilmList.vue';
import FilmItem from '../components/FilmItem.vue';
import Page404 from '../components/Page404.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'FilmList', component: FilmList },
  {
    path: '/:id',
    name: 'FilmItem',
    component: FilmItem,
    props: true,
  },
  { path: '*', name: 'Page404', component: Page404 },
];

const router = new Router({ routes, mode: 'history' });

export default router;
