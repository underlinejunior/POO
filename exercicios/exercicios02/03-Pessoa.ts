/*Implemente uma classe chamada Pessoa que possua os seguintes 
atributos: nome, idade, peso e altura. 
Inicialize esses dados através do construtor da classe.
Crie um método IMC que calcule o Índice de Massa Corporal usando a fórmula IMC = peso/(altura^2).
Implemente também um método categoriaIMC que retorne a categoria do IMC da pessoa de acordo com a tabela fornecida.
Para testar, instancie objetos do tipo Pessoa e utilize-os para testar a classe.*/

class Pessoa{
    nome: string;
    idade: number;
    peso: number;
    altura: number;
    constructor(nome: string, idade: number, peso: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    imc(){
        let imc = this.peso / (this.altura ** 2);
        return imc.toFixed(2);
    }
}

const pessoa = new Pessoa("João", 20, 80, 1.80);
console.log("IMC: "+ pessoa.imc());

