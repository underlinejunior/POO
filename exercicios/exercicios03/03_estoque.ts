//Classe Estoque com Controle de Quantidade
//3. Desenvolva uma classe Estoque que encapsule um item com atributos privados _nome, _quantidade e _preco.

class Estoque {
    private _nome: string;
    private _quantidade: number;
    private _preco: number;
    constructor(nome: string, quantidade: number, preco: number) {
        this._nome = nome;
        this._quantidade = quantidade;
        this._preco = preco;
    }

//Use getters e setters para controlar o acesso, onde o setter de quantidade não permite valores negativos.

    set setQuantidade(quantidade: number) {
        if (quantidade >= 0) {
            this._quantidade = quantidade;
        } else {
            console.error("A quantidade deve ser positiva.");
        }
    }
    get getQuantidade() {
        return this._quantidade;
    }
//Implemente métodos adicionarQuantidade e removerQuantidade para manipular o estoque.
    addQuantidade(quantidade: number) {
        console.log(`+ ${quantidade} itens`);
        this._quantidade += quantidade;
    }
    remQuantidade(quantidade: number) {
        
        console.log(`- ${quantidade}`);
        this._quantidade -= quantidade;
    }
}

const estoque = new Estoque("Caneta", 10, 1.99);
const quantidade = estoque.getQuantidade;
console.log("Quantidade: ", quantidade);

estoque.addQuantidade(5);
console.log(`Quantidade: ${estoque.getQuantidade}`);
estoque.remQuantidade(2);
console.log(`Quantidade: ${estoque.getQuantidade}`);