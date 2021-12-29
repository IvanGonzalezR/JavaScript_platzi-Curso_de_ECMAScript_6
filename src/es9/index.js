/**
 * Operador de reposo (...all)
 * En destructuracion de un objeto
 */

const obj = {
    name: 'Ivan',
    age: 21,
    country: 'MX',
};

let { country, ...all } = obj;
console.log(country, all);

/**
 * Union de elmentos de un objeto
 * Mediante propagacion
 */

const obj = {
    name: 'Ivan',
    age: 21,
};

const obj1 = {
    ...obj,
    country: 'Mx',
};

console.log(obj1);

/**
 * Promise.finally
 * Sirve para saber cuando una promesa ha terminado
 */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 2000)
            : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(a => console.log('Ha terminado la promesa'));

/**
 * Acceder a partes especificas de un regEx con match
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

