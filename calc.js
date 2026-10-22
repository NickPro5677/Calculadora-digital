// Lógica pura de la calculadora: solo cuentas, sin tocar la pantalla.
// Así se puede probar sola con Node (ver tests/calc.test.js).

// Hace la operación. Devuelve null si se divide entre cero.
function operar(a, op, b) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? null : a / b;
  }
  return null;
}

// Redondea a 8 decimales para evitar errores como 0.1 + 0.2 = 0.30000000000000004
function redondear(n) {
  return Math.round(n * 100000000) / 100000000;
}

// Permite usar estas funciones en Node (pruebas); en el navegador se ignora.
if (typeof module !== 'undefined') module.exports = { operar, redondear };
