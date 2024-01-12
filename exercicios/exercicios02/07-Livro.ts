//Crie uma classe "Livro" com atributos para título, autor e ISBN, além de um estado que indica se está disponível para empréstimo. 
//Implemente métodos para emprestar e devolver o livro. 
//Desenvolva uma classe "Biblioteca" que gerencia uma coleção de livros, permitindo adicionar livros, emprestar e consultar livros por ISBN.
//Faça testes para adicionar livros à biblioteca, realizar empréstimos e devoluções.

class Livro{
    titulo: string;
    autor: string;
    ISBN: number;
    emprestado: boolean;
    constructor(titulo: string, autor: string, ISBN: number){
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
        this.emprestado = false;
    }
    emprestar(){
        this.emprestado = true;
    }
    devolver(){
        this.emprestado = false;
    }
}

class Biblioteca{
    livros: Livro[] = [];
    adicionarLivro(titulo: string, autor: string, ISBN: number){
        const novoLivro = new Livro(titulo, autor, ISBN);
        this.livros.push(novoLivro);
        console.log("livro adicionado:", novoLivro.titulo);
    }
    emprestarLivro(ISBN: number){
        for(const livro of this.livros){
            if(livro.ISBN === ISBN){
                livro.emprestar();
                console.log("livro emprestado:", livro.titulo);
            }
        }
    }
    devolverLivro(ISBN: number){
        for(const livro of this.livros){
            if(livro.ISBN === ISBN){
                livro.devolver();
                console.log("livro devolvido:", livro.titulo);
            }
        }
    }
    consultarLivro(ISBN: number){
        for(const livro of this.livros){
            if(livro.ISBN === ISBN){
                console.log("livro encontrado:", livro);
            }
        }
    }
}


const biblioteca = new Biblioteca();
const livro1 = new Livro("Livro 1", "Autor 1", 123);
const livro2 = new Livro("Livro 2", "Autor 2", 456);
const livro3 = new Livro("Livro 3", "Autor 3", 789);

biblioteca.adicionarLivro( livro1.titulo, livro1.autor, livro1.ISBN);
biblioteca.adicionarLivro( livro2.titulo, livro2.autor, livro2.ISBN);
biblioteca.adicionarLivro(livro3.titulo, livro3.autor, livro3.ISBN);

biblioteca.emprestarLivro(123);
biblioteca.emprestarLivro(456);

biblioteca.devolverLivro(123);
biblioteca.devolverLivro(456);

biblioteca.consultarLivro(123);


