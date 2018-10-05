import axios from 'axios'

export default ({
  namespaced: true,
  state: {
    pedido: '',
    pedidos: [],
    mostrarPedido: false
  },
  mutations: {
    TOGGLE: (state, obj) => {
      state.mostrarPedido = obj
    },
    LISTAR_PEDIDOS: (state, obj) => {
      state.pedidos = obj
    },
    SET_PEDIDO: (state, obj) => {
      state.pedido = obj
    }
  },
  actions: {
    toggleModal: ({ commit }, payload) => {
      commit('TOGGLE', payload)
    },
    listarPedidos: async ({ commit }) => {
      const pedidos = (await axios.get(process.env.VUE_APP_URL_API + 'pedidos')).data
      commit('LISTAR_PEDIDOS', pedidos)
    },
    visualizarPedido: ({ commit, dispatch }, pedido) => {
      commit('SET_PEDIDO', pedido)
      dispatch('toggleModal', true)
    }
  }
})
