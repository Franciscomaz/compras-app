import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/navegacao/Dashboard'
import ListaDeProdutos from './components/produtos/ListaDeProdutos'
import ListaDePedidos from './components/pedidos/ListaDePedidos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'produtos',
      component: ListaDeProdutos
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      redirect: { name: 'produtos' }
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ListaDeProdutos
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: ListaDePedidos
    }
  ]
})
