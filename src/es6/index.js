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

let pais = 'dsdsd';

let persona = {
    age: 20,
    name: 'Kike',
    country: pais
}

newFunction2(persona);

let frase = `A ver si
        cierto`;
console.log(frase); 

let person = {
    name: 'Kike',
    age: 20,
    country: 'Mx'
}

let { name, age } = person;

console.log(name, age);