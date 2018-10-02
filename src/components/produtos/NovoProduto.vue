<template>
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
import { mapActions } from 'vuex'

export default {
  name: 'CadastroDeProdutos',
  props: {
    produto: Object
  },
  methods: {
    ...mapActions('Produtos', ['listarProdutos', 'adicionarProduto', 'removerProduto', 'atualizarProduto'])
  }
}
</script>

<style scoped>

</style>
