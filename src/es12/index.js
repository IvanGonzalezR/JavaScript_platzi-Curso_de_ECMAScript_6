/**
 * replaceAll
 */

const string = "Javascript es maravilloso con Javascript puedo ser la verga en la Web";
// Solo reemplaza el primer elemento
const replacedString = string.replace("Javascript", "Python");
// Reemplaza TODAS las coincidencias
const replacedString2 = string.replaceAll("Javascript", "Python");

console.log(replacedString);
console.log(replacedString2);

/** 
* Metodos privados (agregar un # antes de las funciones)
*/

class Message {
    #show(val) {
        console.log(val);
    }
};

const message = new Message();
message.show(`Hola world`);

/**
 * Promisa.any
 * Captura la respuesta de la primer promesa resuelta
 */

const promise = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

// Devuelve 2 porque es el primero que se resuelve
Promise.any([promise, promise2, promise3]).then(response => console.log(response));

/**
 * WeakRef, referencia debil./ Evita que el garbageCollector elimine el objeto
 */

class AnyClass {
    constructor(elemento) {
        this.ref = new WeakRef(elemento);
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse);
