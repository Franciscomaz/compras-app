export default ({
  namespaced: true,
  state: {
    carrinhoDeCompras: [],
    mostrarCarrinhoDeCompras: false
  },
  mutations: {
    TOGGLE: (state, obj) => {
      state.mostrarCarrinhoDeCompras = obj
    },
    ADICIONAR: (state, obj) => {
      state.carrinhoDeCompras.push(obj)
    },
    REMOVER: (state, obj) => {
      var indice = state.carrinhoDeCompras.map(item => item.id).indexOf(obj.id)
      state.carrinhoDeCompras.splice(indice, 1)
    },
    INCREMENTAR_QUANTIDADE: (state, obj) => {
      const produto = state.carrinhoDeCompras.find(produto => produto.id === obj.id)
      produto.incrementarQuantidade()
    }
  },
  actions: {
    toggleCarrinhoDeCompras: ({ commit }, payload) => {
      commit('TOGGLE', payload)
    },
    adicionarNoCarrinho: ({ commit, getters }, produto) => {
      if (getters.contemProduto(produto)) {
        commit('INCREMENTAR_QUANTIDADE', produto)
      } else {
        commit('ADICIONAR', produto)
      }
    },
    removerDoCarrinho: ({ commit }, produto) => {
      produto.limpar()
      commit('REMOVER', produto)
    }
  },
  getters: {
    contemProduto: state => obj => {
      return state.carrinhoDeCompras.find(produto => produto.id === obj.id) !== undefined
    },
    valorTotal: state => {
      return state.carrinhoDeCompras.reduce((previous, obj) => (previous + obj.valorTotal()), 0)
    },
    quantidade: state => {
      return state.carrinhoDeCompras.reduce((previous, obj) => (previous + obj.quantidade), 0)
    },
    possuiProduto: state => {
      return state.carrinhoDeCompras.length > 0
    }
  }
})
