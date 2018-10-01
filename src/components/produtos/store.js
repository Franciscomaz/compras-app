import axios from 'axios'
import Produto from './produto'

export default ({
  namespaced: true,
  state: {
    listaDeProdutos: []
  },
  mutations: {
    LISTAR_PRODUTOS: (state, obj) => {
      state.listaDeProdutos = obj
    }
  },
  actions: {
    listarProdutos: async ({ commit }) => {
      const produtos = (await axios.get('http://localhost:3000/produtos')).data.map(produto => new Produto(produto))
      commit('LISTAR_PRODUTOS', produtos)
    }
  }
})
