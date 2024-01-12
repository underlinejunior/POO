//Elabore uma classe "Tarefa" para gerenciar tarefas. Cada tarefa deve ter uma descrição e um nível de prioridade. 

//Inclua um método para marcar a tarefa como concluída. 
//Desenvolva também uma classe "GerenciadorDeTarefas" que deve ser capaz de adicionar tarefas, listar todas as tarefas pendentes e listar tarefas por nível de prioridade.
//Realize testes criando tarefas e utilizando as funcionalidades do gerenciador.

class Tarefa {
    descricao: string;
    nivel: number;
    concluida: boolean;
    constructor(descricao: string, nivel: number) {
        this.descricao = descricao;
        this.nivel = nivel;
        this.concluida = false;
    }
}

class GerenciadorDeTarefas {
    tarefas: Tarefa[] = [];
    adicionarTarefa(descricao: string, nivel: number) {
        const tarefa = new Tarefa(descricao, nivel);
        this.tarefas.push(tarefa);
    }
    contarTarefasPendentes() {
        let count = 0;
        for (const tarefa of this.tarefas) {
            if (!tarefa.concluida) {
                count++;
            }
        }
        return count;
    }
    contarTarefasPorNivel(nivel: number) {
        let count = 0;
        for (const tarefa of this.tarefas) {
            if (tarefa.nivel === nivel) {
                count++;
            }
        }
        return count;
    }
    marcarTarefaComoConcluida(descricao: string) {
        for (const tarefa of this.tarefas) {
            if (tarefa.descricao === descricao) {
                tarefa.concluida = true;
                console.log("Tarefa ", tarefa.descricao.toUpperCase(), " concluída!");
            }
            //referenciar a tarefa concluida
           
        }
    }
}

const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa("Lavar roupa", 2);
gerenciador.adicionarTarefa("Estudar", 1);
gerenciador.adicionarTarefa("Trabalhar", 3);
gerenciador.adicionarTarefa("Dormir", 4);

console.log("Tarefas pendentes:", gerenciador.contarTarefasPendentes());
console.log("Tarefas de nível 2:", gerenciador.contarTarefasPorNivel(2));

gerenciador.marcarTarefaComoConcluida("Lavar roupa");

console.log("Tarefas pendentes:", gerenciador.contarTarefasPendentes());

