import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import MovieView from '../views/MovieView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
