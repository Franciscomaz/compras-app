import axios from 'axios'

export default ({
  namespaced: true,
  state: {
    listaDeProdutos: [],
    carrinhoDeCompras: []
  },
  mutations: {
    ADICIONAR_NO_CARRINHO: (state, obj) => {
      state.carrinhoDeCompras.push(obj)
    },
    LISTAR_PRODUTOS: (state, obj) => {
      state.listaDeProdutos = obj
    }
  },
  actions: {
    adicionarNoCarrinho: ({ commit }, produto) => {
      commit('ADICIONAR_NO_CARRINHO', produto)
    },
    listarProdutos: async ({ commit }) => {
      const produtos = (await axios.get('http://localhost:3000/produtos')).data
      commit('LISTAR_PRODUTOS', produtos)
    }
  }
})
