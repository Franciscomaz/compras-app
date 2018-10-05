<template>
  <v-dialog v-model="mostrarPedido" max-width="500px">
    <v-card>
      <v-card-title class="headline text--secondary">Pedido</v-card-title>
      <v-data-table
          :headers="headers"
          :items="pedido.produtos"
          hide-actions
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.nome }}</td>
          <td class="text-xs-right">{{ props.item.quantidade }}</td>
          <td class="text-xs-right">{{props.item.valor | converterParaReais}}</td>
          <td class="text-xs-right">{{ props.item.valor_total | converterParaReais }}</td>
        </template>
        <v-layout slot="no-data" class="d-flex">
          <div class="text-md-center red--text">Nenhum produto encontrado.</div>
        </v-layout>
      </v-data-table>
      <v-divider></v-divider>
      <v-card-text class="text-xs-right">
        <span style="font-size: 16px" class="text--secondary mr-2">Total: </span>
        <span>{{pedido.valor | converterParaReais}}</span>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pedido',
  data: () => ({
    headers: [
      { text: 'Nome', value: 'nome', align: 'center' },
      { text: 'Quantidade', value: 'quantidade', align: 'center' },
      { text: 'Unitário', value: 'unitario', align: 'center' },
      { text: 'Total', value: 'total', align: 'center' }
    ]
  }),
  computed: {
    ...mapState('Pedidos', ['pedido']),

    mostrarPedido: {
      get () {
        return this.$store.state.Pedidos.mostrarPedido
      },
      set (value) {
        this.$store.commit('Pedidos/TOGGLE', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
