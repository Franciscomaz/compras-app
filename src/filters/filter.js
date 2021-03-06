import Vue from 'vue'

Vue.filter('converterParaReais', value => {
  var valor = parseFloat(value).toFixed(2).split('.')
  valor[0] = `R$ ${valor[0].split(/(?=(?:;;;)*$)/).join('.')}`

  return valor.join(',')
})
