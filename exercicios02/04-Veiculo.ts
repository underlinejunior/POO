/*Crie uma classe chamada Veiculo. A classe deve ter os atributos: marca, modelo, ano e quilometragem.
Implemente os métodos:
andar(distancia: number): Aumenta a quilometragem do veículo pela distância passada como parâmetro.
info(): Retorna uma string com as informações do veículo.
Para testar, instancie objetos do tipo Veiculo e utilize-os para testar a classe.*/

class Veiculo{
    marca: string;
    modelo: string;
    ano: number;
    quilometragem: number;
    constructor(marca: string, modelo: string, ano: number, quilometragem: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }
    andar(distancia: number){
        this.quilometragem += distancia;
    }
    info(){
        return `Veiculo: ${this.marca} ${this.modelo} ${this.ano} ${this.quilometragem}`
    }
}

const carro = new Veiculo("Fiat", "Uno", 2018, 0);
console.log("Info: " +carro.info());
carro.andar(100);
console.log("Info: " +carro.info());
carro.andar(250);
console.log("Info: " +carro.info());
