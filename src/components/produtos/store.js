import axios from 'axios'
import Produto from './produto'

export default ({
  namespaced: true,
  state: {
    listaDeProdutos: [],
    marcas: [],
    categorias: [],
    mostrarModal: false,
    editedItem: {
      nome: '',
      descricao: '',
      valor: ''
    }
  },
  mutations: {
    LISTAR_PRODUTOS: (state, obj) => {
      state.listaDeProdutos = obj
    },
    TOGGLE: (state, obj) => {
      state.mostrarModal = obj
    },
    ASSIGN: (state, obj) => {
      state.editedItem = Object.assign({}, obj)
    }
  },
  actions: {
    listarProdutos: async ({ commit }) => {
      const produtos = (await axios.get(process.env.VUE_APP_URL_API + 'produtos')).data.map(produto => new Produto(produto))
      commit('LISTAR_PRODUTOS', produtos)
    },
    atualizarProduto: async ({ commit }, produto) => {
      await axios.put(process.env.VUE_APP_URL_API + 'produtos', produto)
    },
    adicionarProduto: async ({ commit, actions }, produto) => {
      await axios.post(process.env.VUE_APP_URL_API + 'produtos', produto)
    },
    removerProduto: async ({ commit }, produto) => {
      await axios.delete(process.env.VUE_APP_URL_API + 'produtos/' + produto.id)
    },
    toggleModal: ({ commit }, mostrarModal) => {
      commit('TOGGLE', mostrarModal)
    },
    assign: ({ commit }, produto) => {
      commit('ASSIGN', produto)
    }
  }
})
