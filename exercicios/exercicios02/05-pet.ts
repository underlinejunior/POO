/*Desenvolva uma classe chamada Pet. A classe deve ter os atributos: nome, tipo e idade.
Implemente os métodos:
aniversario(): Aumenta a idade do pet em 1 ano.
info(): Retorna uma string contendo todas as informações do pet.
Para testar, instancie objetos do tipo Pet e utilize-os para testar a classe.*/

class Pet{
    nome: string;
    tipo: string;
    idade: number;
    constructor(nome: string, tipo: string, idade: number){
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
    }
    aniversario(){
        this.idade++;
    }
    info(){
        return `Pet: ${this.tipo} ${this.nome} ${this.idade}anos`;
    }
}
const pet = new Pet("Bolinha", "Cachorro", 2);
console.log(pet.info());
pet.aniversario();
console.log(pet.info());
pet.aniversario();
console.log(pet.info());