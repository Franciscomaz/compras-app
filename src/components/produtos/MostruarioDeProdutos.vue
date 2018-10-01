<template>
  <v-container>
    <v-layout>
      <v-flex xs2 sm2>
      </v-flex>
      <v-flex xs10 sm10>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex
                  v-for="produto in listaDeProdutos"
                  :key="produto.id"
                  xs12
                  sm6
                  md4
                  lg4
                  pa-4
              >
                <v-card color="white" class="indigo--text">
                  <v-layout row>
                    <v-flex xs5 pa-2>
                      <v-img
                          :src="produto.imagem"
                          height="125px"
                          contain
                      ></v-img>
                    </v-flex>
                    <v-flex xs7>
                      <v-card-title primary-title>
                        <div>
                          <span class="headline">{{produto.nome}}</span>
                          <div>Descrição: {{produto.descricao}}<br>Preço: R$ {{produto.valor}}</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-card-actions class="pa-3">
                    <v-btn flat color="indigo" @click="adicionarNoCarrinho(produto)">Adicionar no carrinho</v-btn>
                    <v-spacer></v-spacer>
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MostruarioDeProdutos',
  mounted () {
    this.listarProdutos()
  },
  methods: {
    ...mapActions('Produtos', ['listarProdutos']),
    ...mapActions('CarrinhoDeCompras', ['adicionarNoCarrinho'])
  },
  computed: {
    ...mapState('Produtos', ['listaDeProdutos'])
  }
}
</script>

<style scoped>

</style>
