const Bascula = require('./bascula.js'); 
class Paciente extends Bascula{ 
  
    constructor(nombre, apellidos, fech_nacimiento) {
        super();
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fech_nacimiento = new Date(fech_nacimiento);
    }

    saludar() {
       let saludo = 'Hola soy ' + this.nombre + ' ' + this.apellidos;
        return saludo;
    }

    obtenerNombre() {
        return this.nombre;
    }

    modificarNombre(nombre) {
        this.nombre = nombre;
    }

    obtenerApellidos() {
        return this.apellidos;
    }

    modificarApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    obtenerFechaNacimiento() {

       this.fech_nacimiento.getDate();
        let day =  this.fech_nacimiento.getDate();
        let month = this.fech_nacimiento.getMonth() + 1;
        let year =this.fech_nacimiento.getFullYear();
        let fecha=`${day}-0${month}-${year}`;
        return fecha;
    }

    modificarFechaNacimento(fecha) {
        this.fech_nacimiento = fecha;
    }

    obtenerEdad(){
        hoy=new Date();
        hoyAno=hoy.getFullYear();
        edat=hoyAno-this.fech_nacimiento;
        return edat;
    }
   
   modificarBascula(bascula){
    this.anotarPeso(bascula);
   }
   obtenerBascula(){
       bascula=new Bascula();
       bascula=this.bascula;
   
   }
   calcularIMC2(){

       let imc;
       let frase;
       imc= this.calcularIMC();
       console.log("decimal "+imc)
       frase=this.describirIMC(imc);
     console.log(frase+"---"); 

    }
}
/*p1=new Paciente("Pepe","Solanes",new Date(1977,5,5));
   
console.log(p1.nombre);
console.log(p1.obtenerFechaNacimiento);
p1.modificarBascula(3,33);
p1.modificarBascula(8.3,33.2);
console.log("maxPes_-_-"+p1.obtenerPesoMaximo())

//console.log(p1.obtenerBascula())
console.log(p1.calcularIMC2());*/

module.exports = Paciente;