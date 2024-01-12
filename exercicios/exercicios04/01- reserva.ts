//SOBRECARGA DE METODOS
//Implemente uma classe SistemaReserva que permite fazer reservas em um hotel.

class SistemaReserva {

  //A classe deve ter métodos sobrecarregados para reservar:
  //Por número de dias (reservar(dias: number)).
  reservarDias(dias: number) {
    console.log(`Reservar por ${dias} dias.`);
  }

  //Por data de entrada e saída (reservar(entrada: Date, saida: Date)).
  reservarDatas(entrada: Date, saida: Date) {
    console.log(`Reservar entre ${entrada} e ${saida}.`);
  }

  //Por nome do cliente e número de dias (reservar(nomeCliente: string, dias:number)).
  reservarNome(nomeCliente: string, dias: number) {
    console.log(`Reservar por ${nomeCliente} por ${dias} dias.`);
  }
}

const reserva = new SistemaReserva();
reserva.reservarDias(5);
reserva.reservarDatas(new Date(), new Date());
reserva.reservarNome("Joaquim", 3);
