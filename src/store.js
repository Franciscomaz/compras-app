import Vue from 'vue'
import Vuex from 'vuex'
import Navegacao from './components/navegacao/store'
import Compras from './components/compras/store'

Vue.use(Vuex)

const modules = {
  Navegacao,
  Compras
}

export default new Vuex.Store({
  modules
})
