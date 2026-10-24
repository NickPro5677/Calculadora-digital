const test = require('node:test');
const assert = require('node:assert');
const { operar, redondear } = require('../src/calc.js');

test('suma, resta, multiplicación y división', () => {
  assert.strictEqual(operar(2, '+', 3), 5);
  assert.strictEqual(operar(9, '-', 4), 5);
  assert.strictEqual(operar(6, '*', 7), 42);
  assert.strictEqual(operar(8, '/', 2), 4);
});

test('dividir entre cero devuelve null', () => {
  assert.strictEqual(operar(8, '/', 0), null);
});

test('0.1 + 0.2 redondeado da 0.3', () => {
  assert.strictEqual(redondear(operar(0.1, '+', 0.2)), 0.3);
});

test('números negativos', () => {
  assert.strictEqual(operar(-5, '+', 3), -2);
  assert.strictEqual(operar(-2, '*', -3), 6);
});

test('cero dividido entre un número da 0', () => {
  assert.strictEqual(operar(0, '/', 5), 0);
});

test('un operador desconocido devuelve null', () => {
  assert.strictEqual(operar(2, '%', 3), null);
});

test('decimales largos se cortan en 8 cifras', () => {
  assert.strictEqual(redondear(operar(1, '/', 3)), 0.33333333);
  assert.strictEqual(redondear(operar(2, '/', 3)), 0.66666667);
});

test('redondear también funciona con negativos', () => {
  assert.strictEqual(redondear(-0.1 - 0.2), -0.3);
});
