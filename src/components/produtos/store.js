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
    },
    atualizarProduto: async ({ commit }) => {
      await axios.put('http://localhost:3000/produtos')
      this.listarProdutos()
    },
    adicionarProduto: async ({ commit }) => {
      await axios.post('http://localhost:3000/produtos')
      this.listarProdutos()
    },
    removerProduto: async ({ commit }) => {
      await axios.delete('http://localhost:3000/produtos')
      this.listarProdutos()
    }
  }
})
