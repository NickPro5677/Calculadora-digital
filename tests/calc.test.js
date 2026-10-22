const test = require('node:test');
const assert = require('node:assert');
const { operar, redondear } = require('../calc.js');

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
