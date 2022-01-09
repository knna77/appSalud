const assert =require('chai').assert;
const expect =require('chai').expect;
const shoud =require('chai').should();

const Bascula = require ('../bascula');



describe('Main Suite -- Pruebas unitarias Clase Bascula', function(){
    describe ('Constructor Bascula --Test case 1', function(){
        const objetoPrueba =new Bascula();
        it ('obtenerNumeroAnotaciones() == 0 ', function(){
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(0);
        })
        it ('obtenerNumeroAnotaciones().isNumber', function(){
            expect(objetoPrueba.obtenerNumeroAnotaciones());
        })
       
    })
    describe ('Constructor Bascula --Test case 2', function(){
        const objetoPrueba =new Bascula();
        it ('obtenerPesoMaximo().isNumber', function(){
            expect(objetoPrueba.obtenerPesoMaximo());
        })
    })
    describe ('Constructor Bascula --Test case 3', function(){
        const objetoPrueba =new Bascula();
        it ('obtenerPesoMinimo().isNumber', function(){
            expect(objetoPrueba.obtenerPesoMinimo());
        })
    })
    describe ('Constructor Bascula --Test case 4', function(){
        const objetoPrueba =new Bascula();
        it ('calcularIMC().isNumber', function(){
            expect(objetoPrueba.calcularIMC());
        })
    })
    describe ('Constructor Bascula --Test case 5', function(){
        const objetoPrueba =new Bascula();
        it ('describirIMC().isString', function(){
            expect(objetoPrueba.describirIMC(35));
        })
    })
});