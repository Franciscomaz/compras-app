<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm12>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex
                  v-for="produto in listaDeProdutos"
                  :key="produto"
                  xs4
                  pa-3
              >
                <v-card>
                  <v-img
                      :src="produto.imagem"
                      aspect-ratio="2.75"
                  ></v-img>
                  <v-card-title class="text--indigo headline mb-0" flat color="indigo" primary-title>
                    {{produto.nome}}
                  </v-card-title>
                  <v-card-text>
                    <div>Descrição: {{produto.descricao}}<br>Preço: {{produto.valor}}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat color="indigo">Adicionar no carrinho</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MostruarioDeProdutos',
  computed: {
    ...mapState('Compras', ['listaDeProdutos'])
  }
}
</script>

<style scoped>

</style>
