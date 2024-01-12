// locadora de veículos
//o sistema deve tratar diferentes tipos de veículos ( como carro e caminhoa) e calcular o custo do alugues com base em caracteristicas especificas de cadas tipo
//crie uma interface IVeiculo com os seguites metodos: calcularAluguel(dias:number) que calcula o custo total do algues com base no numero de dias e exibirDetalhes():string que retorna uma descrição do veiculo

interface IVeiculo {
    calcularAluguel(dias: number): number;
    exibirDetalhes(): string;
}
//implemente uma classe abstrata veículo que realize a implementação basica da interface IVeiculo. que comtenha  propriedades protegidas: marca, modelo e tarifaBaseDiaria; implementação do metodo exibir detalhes() que retorna detalhes do veículo e um metodo abstrato calcularAluguel(dias:number)

abstract class Veiculo implements IVeiculo {
    protected marca: string;
    protected modelo: string;
    protected tarifaBaseDiaria: number;
    constructor(marca: string, modelo: string, tarifaBaseDiaria: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.tarifaBaseDiaria = tarifaBaseDiaria;
    }
    exibirDetalhes(): string {
        return `${this.marca} ${this.modelo}`;
    }
    abstract calcularAluguel(dias: number): number;
    
}

//crie duas sbclasses de Veiculo: Carro e Caminhão
//Carro deve ter propriedades acicional tipoCombustivel(valoes possiveis:gasolina, diesel, eletrico)implementação de calcularAluguel(dias:number) onde o custo base do alugues é a tarifaBaseDiaria * dias. se o tipoCombustivel for eletrico aplique um desconto de 5% no custo total

class Carro extends Veiculo {
    private tipoCombustivel: string;
    constructor(marca: string, modelo: string, tarifaBaseDiaria: number, tipoCombustivel: string) {
        super(marca, modelo, tarifaBaseDiaria);
        this.tipoCombustivel = tipoCombustivel;
    }
    //implemente uma sobrecarga do metodo calcularAluguel para aceitar um argumento adicional desconto
    calcularAluguel(dias: number): number;
    calcularAluguel(dias: number, desconto: number): number;
    calcularAluguel(dias: number, desconto?: number): number{
        let custo = this.tarifaBaseDiaria * dias;
        if (desconto) {
            custo = custo * (1 - desconto);
        }
        if (this.tipoCombustivel === "eletrico") {
            custo = custo * 0.95;
        }
        return custo;
    }
}
//A classe Caminhão deve incluir: propriedade adicional capacidadeCarga(em toneladas), implementarção de calcularAluguel(dias:number):o custo base do alugues é a tarifaBaseDiaria * dias.adicione uma taxa adicional de 10% por tonelada de capacidadeCarga.

class Caminhao extends Veiculo {
    private capacidadeCarga: number;
    constructor(marca: string, modelo: string, tarifaBaseDiaria: number, capacidadeCarga: number) {
        super(marca, modelo, tarifaBaseDiaria);
        this.capacidadeCarga = capacidadeCarga;
    }
    calcularAluguel(dias: number): number;
    calcularAluguel(dias: number, desconto: number): number;
    calcularAluguel(dias: number, desconto?: number): number{
        let custo = this.tarifaBaseDiaria * dias;
        if (desconto) {
            custo = custo * (1 - desconto);
        }
        custo += this.capacidadeCarga * 0.1;
        return custo;
    }
    
}

const carro = new Carro("Ford", "Ka", 50, "gasolina");
const caminhao = new Caminhao("Volvo", "FH", 100, 1000);
console.log(carro.exibirDetalhes());
console.log(caminhao.exibirDetalhes());
console.log(carro.calcularAluguel(5));
console.log(caminhao.calcularAluguel(5));
console.log(carro.calcularAluguel(5, 0.05));
console.log(caminhao.calcularAluguel(5, 0.05));
