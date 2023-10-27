/*Crie uma classe chamada Ponto. A classe deverá possuir três construtores:
Um construtor sem parâmetros, que inicializa o ponto nas coordenadas (0,0).
Um construtor que recebe dois parâmetros de coordenadas X e Y.
Um construtor que inicializa o ponto através das coordenadas de outro ponto passado como parâmetro.
Adicione um método distancia que calcula a distância euclidiana entre o ponto atual e um outro ponto passado como parâmetro.
Para testar, instancie objetos do tipo Ponto e utilize-os para testar a classe */
class Ponto{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    distancia(ponto1: Ponto, ponto2:Ponto){
        return Math.sqrt((ponto2.x - ponto1.x)**2 + (ponto2.y - ponto1.y)**2);
    }
}

const pontoA = new Ponto(0,0);
const pontoB = new Ponto(3,4);
console.log("Distância: " +pontoA.distancia(pontoA,pontoB));
