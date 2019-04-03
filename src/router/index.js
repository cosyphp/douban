import Vue from 'vue'
import Router from 'vue-router'

import LayoutView from '../views/LayoutView'
import IndexView from '../views/IndexView'
import DownloadView from '../views/DownloadView'
import AboutView from '../views/AboutView'
import HelpView from '../views/HelpView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: '',
          name: 'Index',
          component: IndexView
        },
        {
          path: 'index.html',
          name: 'IndexView',
          component: IndexView
        },
        {
          path: 'download.html',
          name: 'DownloadView',
          component: DownloadView
        },
        {
          path: 'about.html',
          name: 'AboutView',
          component: AboutView
        },
        {
          path: 'help.html',
          name: 'HelpView',
          component: HelpView
        }
      ]
    },
    {
      path: '*',
      redirect: '/index.html'
    }
  ]
})
