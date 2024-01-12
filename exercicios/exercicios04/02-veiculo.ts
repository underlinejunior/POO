//Crie uma classe base Veiculo com propriedades como marca, modelo e um método displayInfo().
class Veiculo {
    private _marca: string;
    private _modelo: string;
    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
    }
    displayInfo() {
        console.log(`Marca: ${this._marca} Modelo: ${this._modelo}`);
    }
}

//Em seguida, crie classes derivadas Carro e Caminhao.
//HERANÇA
//Carro deve ter propriedades adicionais como tipoCarroceria (sedan, hatchback, etc.) e Caminhao deve ter capacidadeCarga.
//Implemente comportamentos específicos para cada veículo.
class Carro extends Veiculo {
    private _tipoCarroceria: string;
    constructor(marca: string, modelo: string, tipoCarroceria: string) {
        super(marca, modelo);
        this._tipoCarroceria = tipoCarroceria;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Tipo de Carroceria: ${this._tipoCarroceria}`);
    }
}
class Caminhao extends Veiculo {
    private _capacidadeCarga: number;
    constructor(marca: string, modelo: string, capacidadeCarga: number) {
        super(marca, modelo);
        this._capacidadeCarga = capacidadeCarga;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Capacidade de Carga: ${this._capacidadeCarga}`);
    }
}

const carro = new Carro("VW", "Gol", "Hatchback");
const caminhao = new Caminhao("Volvo", "FH", 5000);
carro.displayInfo();
caminhao.displayInfo();