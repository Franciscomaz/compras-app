import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/navegacao/Dashboard'
import ListaDeProdutos from './components/compras/ListaDeProdutos'
import CarrinhoDeCompras from './components/compras/CarrinhoDeCompras'
import MostruarioDeProdutos from './components/compras/MostruarioDeProdutos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      descricao: 'dashboard',
      component: Dashboard
    },
    {
      path: '/home',
      descricao: 'home',
      component: MostruarioDeProdutos
    },
    {
      path: '/produtos',
      descricao: 'produtos',
      component: ListaDeProdutos
    },
    {
      path: '/carrinho',
      descricao: 'carrinho',
      component: CarrinhoDeCompras
    }
  ]
})
