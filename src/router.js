import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/navegacao/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
