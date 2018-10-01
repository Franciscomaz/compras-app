export default class Produto {
  constructor (json) {
    this.id = json.id
    this.nome = json.nome
    this.descricao = json.descricao
    this.imagem = json.imagem
    this.valor = json.valor
    this.quantidade = 1
  }

  resetar () {
    this.quantidade = 0
  }

  incrementarQuantidade () {
    this.quantidade++
  }

  valorTotal () {
    return this.valor * this.quantidade
  }
}
