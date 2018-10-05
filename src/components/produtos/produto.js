export default class Produto {
  constructor (json) {
    this.id = json.id
    this.nome = json.nome
    this.descricao = json.descricao
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

  apenasUm () {
    return this.quantidade === 1
  }

  toJson () {
    return {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      valor: this.valor,
      quantidade: this.quantidade
    }
  }
}
