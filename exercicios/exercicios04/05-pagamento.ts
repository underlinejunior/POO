//INTERFACE

//Defina uma interface ProcessadorPagamento com um método processar(valor: number, conta: string). 
interface ProcessadorPagamento {
    processar(valor: number, conta: string): void;
}
//Implemente esta interface em duas classes,PagamentoCartao e PagamentoBoleto.
//PagamentoCartao deve implementar uma lógica de pagamento específica para cartões, enquanto PagamentoBoleto para boletos.
class PagamentoCartao implements ProcessadorPagamento {
    processar(valor: number, conta: string) {
        console.log(`PagamentoCartao: R$ ${valor} para ${conta}`);
    }
}
class PagamentoBoleto implements ProcessadorPagamento {
    processar(valor: number, conta: string) {
        console.log(`PagamentoBoleto: R$ ${valor} para ${conta}`);
    }
}

const pagamentoCartao = new PagamentoCartao();
const pagamentoBoleto = new PagamentoBoleto();
pagamentoCartao.processar(150, "energia");
pagamentoBoleto.processar(100, "internet");

