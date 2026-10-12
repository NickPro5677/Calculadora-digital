# Calculadora digital

Calculadora web sencilla hecha con HTML, CSS y JavaScript puro (sin dependencias). Tiene tema claro/oscuro (se recuerda entre visitas), línea de historial con la última operación y vibración en móviles compatibles.

## Cómo usarla

1. Clona o descarga el repositorio.
2. Abre `index.html` en tu navegador (doble clic o arrástralo a una pestaña).

No hace falta servidor ni instalación.

## Soporte de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Escribir número / decimal |
| `+` `-` `*` `/` | Operadores (sumar, restar, multiplicar, dividir) |
| `Enter` o `=` | Calcular resultado |
| `Backspace` | Borrar último dígito |
| `Escape` | Limpiar todo (C) |
| `%` | Porcentaje |

## Historial

Cada operación calculada se guarda en `localStorage` (clave `operationHistory`), limitado a las últimas 50. Ese historial no se muestra en la interfaz; en pantalla solo aparece la última operación. Para verlo, abre la consola del navegador y ejecuta:

```js
JSON.parse(localStorage.getItem('operationHistory'))
```
