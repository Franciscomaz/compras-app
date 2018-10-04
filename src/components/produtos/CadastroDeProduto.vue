<template>
  <v-dialog v-model="mostrarModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline text--secondary">{{formTitle()}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedItem.valor" label="Valor"></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-textarea v-model="editedItem.descricao" label="Descrição"></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" flat @click.native="close">Cancelar</v-btn>
        <v-btn color="primary" flat @click.native="save">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CadastroDeProduto',
  data: () => ({
    defaultItem: {
      nome: '',
      descricao: '',
      valor: ''
    }
  }),
  computed: {
    ...mapState('Produtos', ['editedItem']),
    mostrarModal: {
      get () {
        return this.$store.state.Produtos.mostrarModal
      },
      set (value) {
        this.$store.commit('Produtos/TOGGLE', value)
      }
    }
  },
  methods: {
    ...mapActions('Produtos', [
      'toggle',
      'listarProdutos',
      'adicionarProduto',
      'atualizarProduto',
      'assign'
    ]),
    formTitle () {
      return this.editedItem.id === undefined ? 'Novo Produto' : 'Editar Produto'
    },
    save () {
      if (this.editedItem.id !== undefined) {
        this.atualizarProduto(this.editedItem).then(() => {
          this.listarProdutos()
        })
      } else {
        this.adicionarProduto(this.editedItem).then(() => {
          this.listarProdutos()
        })
      }
      this.close()
    },
    close () {
      this.toggle(false)
      setTimeout(() => {
        this.assign(this.defaultItem)
      }, 300)
    }
  }
}
</script>

<style scoped>

</style>
