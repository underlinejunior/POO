//1. Crie uma classe Circulo que encapsule o raio como um atributo privado _raio.

class Circulo {
    private _raio: number;
    constructor(raio: number) {
        this._raio = raio;
    }
//Adicione um getter getRaio e um setter setRaio que valide se o raio é positivo.
    set setRaio(raio: number) {
        if (raio > 0) {
            this._raio = raio;
        } else {
            throw new Error("O raio deve ser positivo.");
        }
    }
    get getRaio() {
        return this._raio;
    }

//Implemente um método getArea que calcule a área do círculo.
    getArea() {
        return Math.PI * this._raio * this._raio;
    }
    getCircunferencia(){
        return 2 * Math.PI * this._raio;
    }
}

const circulo = new Circulo(6);
circulo.setRaio = 5;
console.log("Circulo de Raio: ",circulo.getRaio);
console.log("Area do Círculo: ",circulo.getArea().toFixed(2));
console.log("Circunferencia do Círculo: ",circulo.getCircunferencia().toFixed(2));


