import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import MovieView from '../views/MovieView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PagesView,
      children: [
        {
          path: 'index',
          name: 'IndexView',
          component: MovieView
        }
      ]
    }
  ]
})
