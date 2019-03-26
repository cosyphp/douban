import Vue from 'vue'
import Router from 'vue-router'

import LayoutView from '../views/LayoutView'
import IndexView from '../views/IndexView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: 'index',
          name: 'IndexView',
          component: IndexView
        }
      ]
    }
  ]
})
