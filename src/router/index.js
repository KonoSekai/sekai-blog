import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home.vue')
    }, {
      path: '/archives',
      name: 'Archives',
      component: () => import('@/views/archives.vue')
    }, {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about.vue')
    }, {
      path: '/article/:name',
      name: 'Page',
      component: () => import('@/views/page.vue')
    }, {
      path: '/category',
      name: 'Category',
      component: () => import('@/views/category.vue')
    }, {
      path: '*',
      name: 'error404',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/404.vue')
    }
  ]
})
