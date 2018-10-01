<template>
  <div>
    <v-toolbar color="white">
      <v-toolbar-title class="text--secondary">Produtos</v-toolbar-title>
      <v-toolbar-title>
      <v-btn @click="dialog = true" slot="activator" small fab dark color="indigo">
        <v-icon dark>add</v-icon>
      </v-btn>
      </v-toolbar-title>
      <v-divider
          class="mx-2"
          inset
          vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
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
                <v-flex xs12 sm6 md4>
                  <v-select 
                  :items="categorias" 
                  item-text="nome" 
                  v-model="editedItem.categoria" 
                  label="Categoria"
                  return-object
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                  :items="marcas" 
                  item-text="nome" 
                  v-model="editedItem.marca" 
                  label="Marca"
                  return-object></v-select>
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
    </v-toolbar>
    <v-data-table
        :headers="headers"
        :items="this.listaDeProdutos"
        hide-actions
        class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.nome }}</td>
        <td class="text-xs-right">{{ props.item.descricao }}</td>
        <td class="text-xs-right">{{ props.item.valor }}</td>
        <td class="justify-center layout px-0">
          <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
              small
              @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="listarProdutos">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    descricao: 'ListaDeProdutos',
    dialog: false,
    headers: [
      {
        text: 'Id',
        align: 'left',
        value: 'id'
      },
      { text: 'Nome', value: 'nome' },
      { text: 'Descrição', value: 'descricao' },
      { text: 'Valor', value: 'valor' },
      { text: 'Ações', value: 'name', sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      nome: '',
      descricao: '',
      nome: '',
      marca: {
        id: 1,
        nome: "Teste"
      },
      categoria: {
        id: 2,
        nome: "Teste"
      },
      valor: 0
    },
    defaultItem: {
      nome: '',
      descricao: '',
      nome: '',
      marca: {
        id: 1,
        nome: "Teste"
      },
      categoria: {
        id: 2,
        nome: "Teste"
      },
      valor: 0
    }
  }),
  mounted () {
    this.listarProdutos()
    this.listarMarcas()
    this.listarCategorias()
  },
  computed: {
    ...mapState('Produtos', ['listaDeProdutos', 'categorias', 'marcas']),

    formTitle () {
      return this.editedIndex === -1 ? 'Novo Produto' : 'Editar Produto'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    ...mapActions('Produtos', [
      'listarProdutos', 
      'listarCategorias',
      'listarMarcas', 
      'adicionarProduto', 
      'removerProduto', 
      'atualizarProduto'
    ]),
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    
      editItem (item) {
        this.editedIndex = this.listaDeProdutos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.listaDeProdutos.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.listaDeProdutos.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.listaDeProdutos[this.editedIndex], this.editedItem)
        } else {
          this.listaDeProdutos.push(this.editedItem)
        }
        this.close()
      }
  }
}
</script>

<style scoped>

</style>
