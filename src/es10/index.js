/**
 * Array.prototype.flat
 * Aplana arreglos.
 */

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

/**
 * flatMap
 * Mapear cada elemento aplanado del array
 */

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

/**
 * trim para eliminar espacios en blanco de un string
 */

let hello = `   hello World  `;
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

/**
 * optional catch
 */

try {
} catch /*(error)*/ { //Puede omitirse los parentesis
    error;
}

/**
 * fromEntries para transformar arreglos a objetos con clave: valor
 */

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

/**
 * Acceder a la descripcion de un objeto de tipo simbolo
 */

let mySymbol = `my Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);