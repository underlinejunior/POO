//SOBRESCRITA DE METODOS

//Descrição: Crie uma classe Avaliacao com um método calcularNotaFinal().
class Avaliacao {
  private _nota1: number;
  private _nota2: number;
  constructor(nota1: number, nota2: number) {
    this._nota1 = nota1;
    this._nota2 = nota2;
  }
  calcularNotaFinal() {
    return (this._nota1 + this._nota2) / 2;
  }
  public getNota1() {
    return this._nota1;
  }
  public getNota2() {
    return this._nota2;
  }
}

//Extendam-na com as classes AvaliacaoEscrita e AvaliacaoOral.
//Sobrescreva calcularNotaFinal para calcular a nota de maneiras diferentes(por exemplo, AvaliacaoEscrita pode dar mais peso à gramática, enquantoAvaliacaoOral pode enfatizar a fluência).
class AvaliacaoEscrita extends Avaliacao {
  private _notaGramatica: number;
  constructor(nota1: number, nota2: number, notaGramatica: number) {
    super(nota1, nota2);
    this._notaGramatica = notaGramatica;
  }
  calcularNotaFinal() {
    return (this.getNota1() + this.getNota2() + this._notaGramatica) / 3;
  }
}
class AvaliacaoOral extends Avaliacao {
  private _notaFluencia: number;
  constructor(nota1: number, nota2: number, notaFluencia: number) {
    super(nota1, nota2);
    this._notaFluencia = notaFluencia;
  }
  calcularNotaFinal() {
    return (this.getNota1() + this.getNota2() + this._notaFluencia) / 3;
  }
}

const avaliacaoEscrita = new AvaliacaoEscrita(8, 9, 10);
const avaliacaoOral = new AvaliacaoOral(8, 9, 10);
console.log(avaliacaoEscrita.calcularNotaFinal());
console.log(avaliacaoOral.calcularNotaFinal());
