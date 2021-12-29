/**
 * INCLUDES
 * Funciona tanto en arreglos como en Strings
 */

let numbers = [1, 2, 3, 7, 8];
const VALUE = 7;

if (numbers.includes(VALUE)) {
    console.log('Se encontro el valor ' + VALUE);
} else {
    console.log('No se encontro el valor ' + VALUE);
}

/**
 * Doble asterisco para elevar a la potencia
 */

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(`El resultado es: ${result}`);