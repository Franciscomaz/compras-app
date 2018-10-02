import Vue from 'vue'
import Vuex from 'vuex'
import Navegacao from './components/navegacao/store'
import Produtos from './components/produtos/store'
import CarrinhoDeCompras from './components/compras/store'

Vue.use(Vuex)

const modules = {
  Navegacao,
  Produtos,
  CarrinhoDeCompras
}

export default new Vuex.Store({
  modules
})
