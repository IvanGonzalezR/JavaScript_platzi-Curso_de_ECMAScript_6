function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6

function newFunction2({ name = 'Oscar', age = 32, country = 'MX' }) {
    console.log(name, age, country);
}

// function newFunction2( name = 'Oscar', age = 32, country = 'MX' ) {
//     console.log(name, age, country);
// }

// newFunction2(); //Tomaria los valores por defecto
// newFunction2('Ricardo', 19, 'CO');

let pais = 'dsdsd';

let persona = {
    age: 20,
    name: 'Kike',
    country: pais
}

newFunction2(persona);

let lorem = 'Quiero escribir una frase super epica \n' + 'Otra frase epica 2';
console.log(lorem);

//es6
let lorem2 = `Quiero escribir una frase super epica 
            Otra frase epica 2`; //Multilinea en ECMASCRIPT6
console.log(lorem2);

///////////////////////////////////////////

let person = {
    name: 'Kike',
    age: 20,
    'country': 'Mx'
}
//console.log(person.name, person.age);
//es6  Destructuracion de elementos de un objeto
let { name, age, country } = person; //Tiene que coinicidir los nombres
console.log(name, age, country);

////////////////////////////////////////////

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
//es6 Propagacion de elementos
let education = ['David', ...team1, ...team2];
console.log(education);

////////////////////////////////////////////

let name = 'kike';
let age = 21;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

///////// ARROW FUNCTIONS ///////////////////

const names = [
    { name: 'Kike', age: 21 },
    { name: 'Caro', age: 20 }
];

//es5
let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

/////////////// PROMISES /////////////////////

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hola');
        } else {
            reject('Fsota');
        }
    });
}
helloPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error));

const promesa2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('resuelta');
        } else {
            reject(console.log('No resuelta'));
        }
    })
}

promesa2().then(b => console.log(b)).catch(a => console.log('2'));

////// Clases, Modulos y Generadores /////////

class calculator {
    calculator() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// import { hello as myHello } from './module';
const hello = require('./module');
console.log(hello());

//GENERADORES- algoritmo que retorna valores
function* helloWorld() {
    if (true) {
        yield 'hello!';
    }
    if (true) {
        yield 'World';
    }
    yield 'Fuera de los ifs';
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

