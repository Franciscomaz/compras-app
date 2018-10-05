import Vue from 'vue'
import Vuex from 'vuex'
import Pedidos from './components/pedidos/store'
import Produtos from './components/produtos/store'
import Navegacao from './components/navegacao/store'
import CarrinhoDeCompras from './components/compras/store'

Vue.use(Vuex)

const modules = {
  Pedidos,
  Produtos,
  Navegacao,
  CarrinhoDeCompras
}

export default new Vuex.Store({
  modules
})
