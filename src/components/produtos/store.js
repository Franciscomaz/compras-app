import axios from 'axios'
import Produto from './produto'
import url from '../../config'

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
      const produtos = (await axios.get(url + 'produtos')).data.map(produto => new Produto(produto))
      console.log(produtos)
      commit('LISTAR_PRODUTOS', produtos)
    },
    atualizarProduto: async ({ commit }, produto) => {
      await axios.put(url + 'produtos/' + produto.id, produto)
    },
    adicionarProduto: async ({ commit, actions }, produto) => {
      await axios.post(url + 'produtos', produto)
    },
    removerProduto: async ({ commit }, produto) => {
      await axios.delete(url + 'produtos/' + produto.id)
    },
    toggle: ({ commit }, mostrarModal) => {
      commit('TOGGLE', mostrarModal)
    },
    assign: ({ commit }, produto) => {
      commit('ASSIGN', produto)
    }
  }
})
