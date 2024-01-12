//- Calculadora de Área: Desenvolva uma classe chamada CalculadoraDeArea.
//Esta classe deve ter métodos estáticos que permitem calcular a área de diferentes figuras geométricas: areaCirculo, areaQuadrado e areaRetangulo. Cada método deve receber os parâmetros necessários (como raio para círculo, lado para quadrado, altura e largura para retângulo) e retornar a área calculada.
class CalculadoraDeArea {
  areaCirculo(raio: number) {
    const area = 2 * Math.PI * raio;
    console.log(`Area Circulo: ${area}`);
  }
  areaQuadrado(lado:number){
    const area = lado * lado;
    console.log(`Area Quadrado: ${area}`);
  }
  areaRetangulo(altura:number, largura:number){
    const area = altura*largura;
    console.log(`Area Retangulo: ${area}`);
  }
}

const area = new CalculadoraDeArea();
area.areaCirculo(5);
area.areaQuadrado(5);
area.areaRetangulo(6,2);

