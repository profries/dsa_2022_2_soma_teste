const { expect } = require('expect');
const soma = require('./sum')

test('soma de positivos de 5 + 5 é igual a 10', function() {
   expect(soma(5,5)).toBe(10); 
});

test('soma de positivos de (-5) + (-5) deve sinalizar -1 (erro)', function() {
   expect(soma(-5,-5)).toBe(-1); 
});

 