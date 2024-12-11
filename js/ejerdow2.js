let suma = 0;
let numero;

do {
    numero = parseInt(prompt("Ingresa un número (escribe un número negativo para salir):"), 10);
    if (numero >= 0) {
        suma += numero;
    }
} while (numero >= 0);

console.log("La suma de los números positivos es:", suma);
