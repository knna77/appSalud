const assert =require('chai').assert;
const expect =require('chai').expect;
const shoud =require('chai').should();

const Paciente = require ('../paciente');


describe('Main Suite -- Pruebas unitarias Clase Paciente', function(){
    describe ('Constructor Paciente --Test case 21', function(){

        const objetoPrueba = new Paciente("Pepe","Garcia");
        //const fecha=new Date(1995,11,17);
       it ('saludar("Pepe","Garcia",fecha).isString', function(){
            expect(objetoPrueba.saludar("Pepe","Garcia","1995,11,17"));
        })
    })
})