class Bascula {
 constructor() {
    this.pesos = [];
    this.alturas = [];
    this.fechas = [];
  }

  obtenerNumeroAnotaciones() {
    return this.pesos.length;
  }
   anotarPeso(peso, altura = 1 , fecha= new Date()) {//, fecha= new Date()
    this.pesos.push(peso);
    this.alturas.push(altura);
    this.fechas.push(fecha);
  }
  obtenerPesoMaximo() {
    let maxPes
    maxPes=Math.max.apply(Math, this.pesos);
    maxPes=parseInt(maxPes);   
    return maxPes;
  }
  obtenerPesoMinimo() {
    let minPes; 
    minPes=Math.min.apply(Math, this.pesos);
    minPes=parseInt(minPes)
    return minPes;
  }
  calcularIMC() {
    let ultimPes;
    let unltimaAltura;
    let imc;
    ultimPes=this.pesos.pop();
    unltimaAltura=this.alturas.pop();
    // imc = parseInt(ultimPes) / parseInt(unltimaAltura);
    imc=ultimPes/unltimaAltura;
    imc=  parseInt(imc);
  return imc;
  }

   describirIMC(imc) {
    console.log("-----"+imc);
    const x = imc;
    switch (true) {
     
      case (x < 0):
        console.log('Indice de masa corporal negativo no puede ser');
        break;
      case (x < 15):
        console.log('Infrapeso (delgadez severa)');
        break;
      case (x < 18):
        console.log('Infrapeso (delgadez moderada)');
        break;
      case (x <= 18.5):
        console.log('Infrapeso (delgadez aceptable)');
        break;
      case (x <= 25):
        console.log('Peso normal');
        break;
      case (x <= 30):
        console.log('Sobrepeso');
        break;
      case (x <= 35):
        console.log('Obeso (Tipo I)');
        break;
      case (x <= 40):
        console.log('Obeso (Tipo II)');
        break;
      case (x > 40):
        console.log('Obeso (Tipo III)');
        break;
      default:
        console.log('Error de datos');
    }
    
  }
 
}

module.exports = Bascula;
