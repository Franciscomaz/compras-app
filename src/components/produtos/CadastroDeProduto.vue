<template>
  <v-dialog v-model="mostrarModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline text--secondary">{{tituloDoFormulario()}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field
                  v-model="editedItem.nome" label="Nome"
                  :error-messages="nomeErrors"
                  @blur="$v.editedItem.nome.$touch()"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                  v-model="editedItem.valor" label="Valor"
                  :error-messages="valorErrors"
                  type="number"
                  min="0"
                  required
                  @blur="$v.editedItem.valor.$touch()"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-textarea
                  v-model="editedItem.descricao" label="Descrição"
                  :error-messages="descricaoErrors"
                  :counter="200"
                  @blur="$v.editedItem.descricao.$touch()"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" flat @click.native="fechar">Cancelar</v-btn>
        <v-btn :disabled="formularioInvalido" color="primary" flat @click.native="salvar">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, decimal, maxLength, minValue } from 'vuelidate/lib/validators'

export default {
  name: 'CadastroDeProduto',
  mixins: [validationMixin],
  data: () => ({
    defaultItem: {
      nome: '',
      descricao: '',
      valor: ''
    }
  }),
  validations: {
    editedItem: {
      nome: {
        required
      },
      descricao: {
        required,
        maxlength: maxLength(200)
      },
      valor: {
        required,
        decimal,
        minValue: minValue(0)
      }
    }
  },
  computed: {
    ...mapState('Produtos', ['editedItem']),
    mostrarModal: {
      get () {
        return this.$store.state.Produtos.mostrarModal
      },
      set (value) {
        this.$store.commit('Produtos/TOGGLE', value)
      }
    },
    formularioInvalido: function () {
      return this.$v.$invalid
    },
    nomeErrors () {
      const errors = []
      if (!this.$v.editedItem.nome.$dirty) return errors
      !this.$v.editedItem.nome.required && errors.push('Nome é um campo obrigatório.')
      return errors
    },
    valorErrors () {
      const errors = []
      if (!this.$v.editedItem.valor.$dirty) return errors
      !this.$v.editedItem.valor.required && errors.push('Valor é um campo obrigatório.')
      !this.$v.editedItem.valor.minValue && errors.push('Valor não pode ser negativo.')
      return errors
    },
    descricaoErrors () {
      const errors = []
      if (!this.$v.editedItem.descricao.$dirty) return errors
      !this.$v.editedItem.descricao.required && errors.push('Descricão é um campo obrigatório.')
      return errors
    }
  },
  methods: {
    ...mapActions('Produtos', [
      'toggleModal',
      'listarProdutos',
      'adicionarProduto',
      'atualizarProduto',
      'assign'
    ]),
    tituloDoFormulario () {
      return this.editedItem.id === undefined ? 'Novo Produto' : 'Editar Produto'
    },
    salvar () {
      if (this.editedItem.id !== undefined) {
        this.atualizarProduto(this.editedItem).then(() => {
          this.listarProdutos()
          this.$notify({ title: '', text: 'Produto atualizado com sucesso.', type: 'success' })
        }).catch(() => {
          this.$notify({ title: 'Erro', text: 'Ocorreu um erro.', type: 'error' })
        })
      } else {
        this.adicionarProduto(this.editedItem).then(() => {
          this.listarProdutos()
          this.$notify({ title: '', text: 'Produto adicionado com sucesso.', type: 'success' })
        }).catch(() => {
          this.$notify({ title: 'Erro', text: 'Ocorreu um erro.', type: 'error' })
        })
      }
      this.fechar()
    },
    fechar () {
      this.$v.$reset()
      this.toggleModal(false)
      setTimeout(() => {
        this.assign(this.defaultItem)
      }, 300)
    }
  }
}
</script>

<style scoped>

</style>
