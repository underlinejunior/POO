//Escreva uma classe chamada Aluno cujos objetos representam alunos matriculados em uma  disciplina. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matricula, nome, um array com duas notasDeProva e uma notaDeTrabalho.
//Implemente os seguintes métodos para esta classe: media: Calcula a média final do aluno (cada prova tem peso 2.5 e o trabalho tem peso 2).final:
//Calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a  final).Para testar, instancie objetos do tipo Aluno e utilize-os para testar a classe.

class Aluno {
  matricula: string;
  nome: string;
  notasDeProva: number[];
  notaDeTrabalho: number;
  constructor(
    matricula: string,
    nome: string,
    notasDeProva: number[],
    notaDeTrabalho: number
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.notaDeTrabalho = notaDeTrabalho;
    this.notasDeProva = notasDeProva;
  }

  media(): number {
    let media =
      ((this.notasDeProva[0] + this.notasDeProva[1]) * 2.5 +
        this.notaDeTrabalho * 2) /
      7;
    return media;
  }
  final(): string {
    if (this.media() >= 6) {
      return "Aprovado";
    } else {
      let falta = 12 - (this.media().toFixed(2) as any);
      return falta > 0 ? "Faltam " + falta + " pontos" : "Reprovado";
    }
  }
}

const aluno = new Aluno("1", "João", [2, 10], 10);
console.log(aluno.nome);
console.log("Media: " + aluno.media().toFixed(2));
console.log("Final: " + aluno.final());
