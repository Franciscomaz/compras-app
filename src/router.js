import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/navegacao/Dashboard'
import ListaDeProdutos from './components/produtos/ListaDeProdutos'
import CarrinhoDeCompras from './components/compras/CarrinhoDeCompras'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      descricao: 'dashboard',
      component: Dashboard
    },
    {
      path: '/produtos',
      descricao: 'produtos',
      component: ListaDeProdutos
    },
    {
      path: '/compras',
      descricao: 'produtos',
      component: ListaDeProdutos
    }
  ]
})
