import axios from 'axios'
import Produto from './produto'

export default ({
  namespaced: true,
  state: {
    listaDeProdutos: [],
    marcas: [],
    categorias: [],
    mostrarModal: false
  },
  mutations: {
    LISTAR_PRODUTOS: (state, obj) => {
      state.listaDeProdutos = obj
    },
    LISTAR_CATEGORIAS: (state, obj) => {
      state.categorias = obj
    },
    LISTAR_MARCAS: (state, obj) => {
      console.log(obj)
      state.marcas = obj
    },
  },
  actions: {
    listarProdutos: async ({ commit }) => {
      const produtos = (await axios.get('http://localhost:3000/produtos')).data.map(produto => new Produto(produto))
      commit('LISTAR_PRODUTOS', produtos)
    },
    listarMarcas: async ({ commit }) => {
      const marcas = (await axios.get('http://localhost:3000/marcas')).data
      commit('LISTAR_MARCAS', marcas)
    },
    listarCategorias: async ({ commit }) => {
      const categorias = (await axios.get('http://localhost:3000/categorias')).data
      commit('LISTAR_CATEGORIAS', categorias)
    },
    atualizarProduto: async ({ commit }, produto) => {
      await axios.put('http://localhost:3000/produtos', produto)
      this.listarProdutos()
    },
    adicionarProduto: async ({ commit }, produto) => {
      await axios.post('http://localhost:3000/produtos', produto)
      this.listarProdutos()
    },
    removerProduto: async ({ commit }) => {
      await axios.delete('http://localhost:3000/produtos')
      this.listarProdutos()
    }
  }
})
