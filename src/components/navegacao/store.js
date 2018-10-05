export default ({
  namespaced: true,
  state: {
    mostrarMenu: false
  },
  mutations: {
    TOGGLE: (state, value) => {
      state.mostrarMenu = value
    }
  },
  actions: {
    toggleModal: ({ commit }, value) => {
      commit('TOGGLE', value)
    },
    toggleMenu: ({ state, commit }) => {
      const mostrarMenu = !state.mostrarMenu
      commit('TOGGLE', mostrarMenu)
    }
  }
})
