//CLASSES ABSTRATAS

//Descrição: Defina uma classe abstrata Notificador com um método abstrato enviarMensagem(mensagem: string).
abstract class Notificador {
    protected mensagem: string;
    constructor() {
        this.mensagem = "";
    }
    abstract enviarMensagem(mensagem: string): void;
}
//Crie duas subclasses, NotificadorEmail e NotificadorSMS, que implementem o método enviarMensagem.
//O método em NotificadorEmail deve simular o envio de um e-mail e NotificadorSMS um SMS.
class NotificadorEmail extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando mensagem por e-mail: ${mensagem}`);
    }
}
class NotificadorSMS extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando mensagem por SMS: ${mensagem}`);
    }
}
const notificadorEmail = new NotificadorEmail();
const notificadorSMS = new NotificadorSMS();
notificadorEmail.enviarMensagem("Ola");
notificadorSMS.enviarMensagem("Ola"); 