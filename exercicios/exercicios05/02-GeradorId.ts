// Crie uma classe chamada GeradorID.
//Esta classe deve ter um atributo estático privado que mantenha um contador.
//Implemente um método estático gerarNovoID que incrementa este contador e retorna um novo ID único cada vez que é chamado.

class GeradorID{
    private static _id;
    static gerarNovoID(){
        this._id = this._id++;
        return this._id;
        
    }
}

console.log(GeradorID.gerarNovoID());