//Classe Senha com Validação
//2. Implemente uma classe Senha que encapsule uma senha em um atributo privado _senha.

class Senha {
  private _senha: string;
  constructor(senha: string) {
    this._senha = senha;
  }

  //O setter deve validar se a senha tem pelo menos 8 caracteres e contém números e letras.

  set setSenha(senha: string) {
    if (senha.length >= 8 && /\d/.test(senha) && /[a-zA-Z]/.test(senha)) {
      this._senha = senha;
    } else {
      console.log("senha invalida");
    }
  }
  //Adicione um método validarSenha que verifica se uma senha fornecida é igual à senha armazenada

  get getSenha() {
    return this.validarSenha();
  }

  validarSenha() {
    if (this._senha.length >= 8) {
      if (/\d/.test(this._senha)) {
        if (/[a-zA-Z]/.test(this._senha)) {
          return "PARABENS.";
        } else {
          throw new Error(`A senha ${this._senha} não contem letras.`);
        }
      } else {
        throw new Error(`A senha ${this._senha} não contem números.`);
      }
    } else {
      throw new Error(`A senha ${this._senha} tem menos de 8 caracteres.`);
    }
  }

  retornoValidacao() {
    try {
      const senha = new Senha(this._senha);
      senha.getSenha;
    } catch (Error) {
      console.log(Error);
    } 
  }
}

const senha = new Senha("12345678");
senha.retornoValidacao();
const senha2 = new Senha("1234567");
senha2.retornoValidacao();
const senha3 = new Senha("1234567a");
senha3.retornoValidacao();
