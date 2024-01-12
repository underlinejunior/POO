//Escreva uma classe chamada Aluno cujos objetos representam alunos matriculados em uma  disciplina. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matricula, nome, um array com duas notasDeProva e uma notaDeTrabalho.
//Implemente os seguintes métodos para esta classe: media: Calcula a média final do aluno (cada prova tem peso 2.5 e o trabalho tem peso 2).final:
//Calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a  final)
//Para testar, instancie objetos do tipo Aluno e utilize-os para testar a classe.

class Aluno {
  matricula: number;
  nome: string;
  notasDeProva: number[];
  notaDeTrabalho: number;
  constructor(
    matricula: number,
    nome: string,
    notasDeProva: number[],
    notaDeTrabalho: number
  ) {
    
    this.matricula = matricula;
    this.nome = nome;
    this.notaDeTrabalho = notaDeTrabalho;
    this.notasDeProva = notasDeProva;
  }



  media() {
    let media =
      (this.notaDeTrabalho * 2 +
      this.notasDeProva[0] * 2.5 +
      this.notasDeProva[1] * 2.5)/7;
    return media;
  }

  final() {
    let media = this.media();
    if (media >= 6) return "Aprovado";
    else if (media < 6) return(6 - media).toFixed(2) + " para a prova final";
    else return "Reprovado";
  }
}

const aluno = new Aluno(1, "Joaquim", [10, 10], 10);
console.log("aluno: ", aluno.nome);
console.log("Media do aluno: ", aluno.media());
console.log("Final: ",aluno.final());

