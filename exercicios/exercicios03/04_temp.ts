//Classe Tempo com Formatação
//4. Elabore uma classe Tempo com atributos privados para horas, minutos e segundos.

class Tempo {
    private _horas: number;
    private _minutos: number;
    private _segundos: number;
    constructor() {
        this._horas = 0;
        this._minutos = 0;
        this._segundos = 0;
    }

//Crie getters e setters com validações para garantir que as horas estejam entre 0-23 e minutos/segundos entre 0-59.
    get getHoras() {
        return this._horas;
    }
    get getMinutos() {
        return this._minutos;
    }
    get getSegundos() {
        return this._segundos;
    }

    
    set setHoras(horas: number) {
        if (horas >= 0 && horas <= 23) {
            this._horas = horas;
        } else {
            console.error("A hora deve estar entre 0 e 23");
        }
    }
    set setMinutos(minutos: number) {
        if (minutos >= 0 && minutos <= 59) {
            this._minutos = minutos;
        } else {
            console.error("Os minutos devem estar entre 0 e 59");
        }
    }
    set setSegundos(segundos: number) {
        if (segundos >= 0 && segundos <= 59) {
            this._segundos = segundos;
        } else {
            console.error("Os segundos devem estar entre 0 e 59");
        }
    }
    get getTempo() {
        return this._horas;
    }

//Adicione um método formatarTempo que retorna o tempo no formato HH:MM:SS.

    formatarTempo() {
        if(this._horas ==0 || this._minutos ==0 || this._segundos ==0){
            console.error("tempo invalido");
        }else{
        return `${this._horas}:${this._minutos}:${this._segundos}`;
    }
}
}

const tempo = new Tempo();
tempo.setHoras = 12;
tempo.setMinutos = 30;
tempo.setSegundos = 45;

console.log(tempo.formatarTempo());

