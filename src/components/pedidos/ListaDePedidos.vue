<template>
  <div>
    <pedido></pedido>
    <v-toolbar color="white">
      <v-layout>
        <v-toolbar-title class="text--secondary">
          Pedidos
        </v-toolbar-title>
      </v-layout>
    </v-toolbar>
    <template>
      <v-data-table
          :headers="headers"
          :items="this.pedidos"
          hide-actions
          class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.data_pedido }}</td>
          <td class="text-xs-right">{{ props.item.valor | converterParaReais}}</td>
          <td class="justify-center layout px-0">
            <v-icon
                small
                class="mr-2"
                @click="visualizarPedido(props.item)"
            >
              search
            </v-icon>
          </td>
        </template>
        <v-layout slot="no-data" class="d-flex">
          <div class="text-md-center red--text">Nenhum pedido encontrado.</div>
        </v-layout>
      </v-data-table>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Pedido from './Pedido'

export default {
  name: 'ListaDeCompras',
  components: { Pedido },
  mounted () {
    this.listarPedidos()
  },
  data: () => ({
    headers: [
      { text: 'Data', value: 'date' },
      { text: 'Valor', value: 'value' },
      { text: 'Visualizar', value: 'visualizar', sortable: false }
    ]
  }),
  computed: {
    ...mapState('Pedidos', ['pedidos'])
  },
  methods: {
    ...mapActions('Pedidos', ['visualizarPedido', 'listarPedidos', 'toggleModal'])
  }

}
</script>

<style scoped>

</style>
