export default class Produto {
  constructor (json) {
    this.id = json.id
    this.nome = json.nome
    this.descricao = json.descricao
    this.imagem = json.imagem
    this.valor = json.valor
    this.quantidade = 1
  }

  limpar () {
    this.quantidade = 0
  }

  incrementarQuantidade () {
    this.quantidade++
  }

  decrementarQuantidade () {
    if (this.quantidade <= 1) {
      return
    }
    this.quantidade--
  }

  valorTotal () {
    return this.valor * this.quantidade
  }
}
