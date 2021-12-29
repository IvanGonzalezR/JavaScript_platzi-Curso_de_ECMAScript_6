/**
 * Dynamic imports
 */

const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import("./file.js").then(module => module.hello());
    // module.hello();
});

/**
 * BigInts
 */

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

/**
 * Promise.allSettled  (se meten en un arreglo)
 * Promesa que se resuelve solo despues de que todas las promesas
 * dadas se hayan cumplido o rechazado (sin importar que les pase)..
 * con Promise.all se ejecuta si cualquiera es rechazada
 */

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

/**
 * Global "This"
 */

console.log(window); // en un navegador funciona
console.log(globalThis);

/**
 * operador null (??)
 * devuelve el operador contrario al objeto nulo
 * Si no hay nulos, devuelve el izquierdo.
 */

const foo = null ?? 'default string';
const fooo = 'default string' ?? null;
const foooo = 'default string 1' ?? 'default string 2';
console.log(foo);
console.log(fooo);
console.log(foooo);

/**
 * Optional shaning 
 */
// Guardar datos de una API al objeto user
// poner interrogaciones, evita que se rompa la aplicacion

const user = {};
console.log(user?.profile?.email); //undefined si no existe

if (user?.profile?.email) {
    console.log(`Hay email`);
} else {
    console.log(`Fallo`);
}
