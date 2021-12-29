/**
 * Object.entries
 * Devuelve clave y valor de una matriz
 */

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/**
 * Object.entries
 * Devuelve los valores de un objeto a un Arreglo
 */

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

/**
* PADDING
*/

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, 'hi'));

/**
 * ASYNC AWAIT
 */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Hello World'), 2000)
        } else {
            reject(new Error('Test Error'));
        }
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(`Hello`);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(`Hello`);
    } catch (e) {
        console.log(e);
    }
}

anotherFunction();