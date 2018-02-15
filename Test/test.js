//import { platform } from 'os';

const expect = require('chai').expect
const platzom = require('..').default //require('..')

describe('#platzom', function() {
    it('Si la palabra termina con "ar", se le quitan esas dos letras.', function() {
        const traslation = platzom("Programar")
        const traslation2 = platzom("Empezar")
        expect(traslation).to.equal("Program")
        expect(traslation2).to.equal("Empez")
    })
    it('Si la palabra inicia con "Z", se le aniade "pe" al final.', function() {
        const traslation = platzom("zorro")
        const traslation2 = platzom("zarpar")
        expect(traslation).to.equal("zorrope")
        expect(traslation2).to.equal("zarppe")
    })
    it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio.', function() {
        const traslation = platzom("abecedario")
        const traslation2 = platzom("congestionamiento")
        expect(traslation).to.equal("abece-dario")
        expect(traslation2).to.equal("congestio-namiento")
    })

    it('Por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas ', function() {
        const traslation = platzom("sometemos")
        const traslation2 = platzom("solalos")
        expect(traslation).to.equal("SoMeTeMoS")
        expect(traslation2).to.equal("SoLaLoS")
    })
})