import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home
        redirect:'/app'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
        path:'/app',
        component:() => import('./views/App.vue')
      },
      {
          path:'/push',
          component:() => import('./views/Push.vue')
      },
      {
          path:'/dev',
          component:() => import('./views/Dev.vue')
      },
      {
          path:'/manage',
          component:() => import('./views/Manage.vue')
      },
      {
          path:'/table',
          component:() => import('./views/Table.vue')
      },
      {
          path:'/table2',
          component:() => import('./views/Table2.vue')
      },
      {
          path:'/form1',
          component:() => import('./views/Form1.vue')
      },
      {
          path:'/form2',
          component:() => import('./views/Form2.vue')
      },
      {
          path:'/form4',
          component:() => import('./views/Form4.vue')
      },
      {
          path:'/form5',
          component:() => import('./views/Form5.vue')
      },
      {
          path:'/form6',
          component:() => import('./views/Form6.vue')
      },
      {
          path:'/form7',
          component:() => import('./views/Form7.vue')
      },
      {
          path:'/form8',
          component:() => import('./views/Form8.vue')
      },
      {
          path:'/form9',
          component:() => import('./views/Form9.vue')
      },
      {
          path:'/table3',
          component:() => import('./views/Table3.vue')
      },
      {
          path:'/table4',
          component:() => import('./views/Table4.vue')
      },
      {
          path:'/table5',
          component:() => import('./views/Table5.vue')
      },
      {
          path:'/table6',
          component:() => import('./views/Table6.vue')
      },
      {
          path:'/table1',
          component:() => import('./views/Table1.vue')
      },
      {
          path:'/table7',
          component:() => import('./views/Table7.vue')
      },
      {
          path:'/table8',
          component:() => import('./views/Table8.vue')
      },
      {
          path:'/table9',
          component:() => import('./views/Table9.vue')
      },
      {
          path:'/table10',
          component:() => import('./views/Table10.vue')
      },
      {
          path:'/table11',
          component:() => import('./views/Table11.vue')
      },
      {
          path:'/table11-2',
          component:() => import('./views/Table11-2.vue')
      },
      {
          path:'/table11-3',
          component:() => import('./views/Table11-3.vue')
      },
      {
          path:'/slotScope',
          component:() => import('./views/slotScope.vue')
      },
  ]
})
