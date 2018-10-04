<template>
  <div>
    <v-toolbar color="white">
      <v-layout>
        <v-toolbar-title class="text--secondary">
          Pedidos
        </v-toolbar-title>
      </v-layout>
    </v-toolbar>
    <v-data-table
        :headers="headers"
        :items="this.listaDeProdutos"
        hide-actions
        class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.data }}</td>
        <td class="justify-center layout px-0">
          <v-icon
              small
              class="mr-2"
              @click="visualizar(props.item)"
          >
            edit
          </v-icon>
        </td>
      </template>
      <v-layout slot="no-data" class="d-flex">
        <div class="text-md-center red--text">Nenhuma compra realizada.</div>
      </v-layout>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'ListaDeCompras'
}
</script>

<style scoped>

</style>
