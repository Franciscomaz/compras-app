export default ({
  namespaced: true,
  state: {
    mostrarMenu: false
  },
  mutations: {
    ABRIR_OU_FECHAR_MENU: (state, obj) => {
      state.mostrarMenu = obj.mostrarMenu
    }
  },
  actions: {
    abrirOuFecharMenu: ({ state, commit }) => {
      const mostrarMenu = !state.mostrarMenu
      commit('ABRIR_OU_FECHAR_MENU', { mostrarMenu })
    }
  }
})
