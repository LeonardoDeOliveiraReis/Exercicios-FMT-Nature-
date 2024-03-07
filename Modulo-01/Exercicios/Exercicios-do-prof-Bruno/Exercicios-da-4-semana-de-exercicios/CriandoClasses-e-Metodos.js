class Produto{
    nome;
    preco;
    quantidade;
    
    constructor (nome, preco, quantidade = 0) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

 repor(quantidadeReposta){
        this.quantidade += quantidadeReposta
    }
 

 vender(quantidadeVendida) {
    if (quantidadeVendida > this.quantidade ){
        console.log("Estoque insuficiente")
        return
    }
    this.quantidade -= quantidadeVendida
 }

 mostrarEstoque(){
    console.log(`O produto ${this.nome} possui ${this.quantidade} quantidades no estoque`)
 }

 atualizarPreco(novo_preco){
    this.preco = novo_preco
 }

 finalizarCompra(valor) {
    console.log(`A compra total de ${this.quantidade} ${this.nome} foi de ${this.preco} R$! `)
 }
}

class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;
    
    constructor(
         nome,
         idade,
         profissao,
         telefone,
         email,
         clienteDesde) {
         super(nome, idade, profissao)
         this.telefone = telefone
         this.email = email
         this.clienteDesde = clienteDesde
    }
} 
