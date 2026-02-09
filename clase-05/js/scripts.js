// let nombre1 = "Alvaro";
// let nombre2 = "Maria";
// let nombre3 = "Juan";
// let nombre4 = "Ana";
// let nombre5 = "Pedro";


// --- Arrays ---

// const nombres = ["Alvaro", "Maria", "Juan", "Ana", "Pedro"];

// const numeros = [1, 2, 3, 4, 5];

// const booleanos = [true, false, true, false, true];

// const nombres = ["Alvaro", "Maria", "Blanca"];

// const numeros = [1, 2, 3, 4, 5];

// const arrayvacio = [];

// --- 

// let num = 5;

// console.log(num);


// const nombres = ["Alvaro", "Maria", "Juan", "Ana", "Pedro"];
// console.log(nombres);
// console.log(nombres[0]); // Alvaro
// console.log(nombres[1]); // Maria

// nombres[2] = "Blanca"; // Cambia el valor del índice 2 (Juan) por Blanca
// console.log(nombres); // ["Alvaro", "Maria", "Blanca", "Ana", "Pedro"]

// const colores = ["azul", "rojo", "verde"];


// console.log(colores); 
// console.log(colores[colores.length - 3]); // rojo


// const nombres = ["Alvaro", "Maria", "Juan", "Ana", "Pedro"];

// nombres.push("Blanca"); // Agrega Blanca al final del array
// console.log(nombres); // ["Alvaro", "Maria", "Juan", "Ana", "Pedro", "Blanca"]

// console.log(nombres[2]); // Juan
// nombres.pop(); // Elimina el último elemento del array (Blanca)
// console.log(nombres); // ["Alvaro", "Maria", "Juan", "Ana", "Pedro"]



// const nombres = [];

// nombres.push("Alvaro");
// nombres.push("Maria");
// nombres.push("Juan");

// console.log(nombres); // ["Alvaro", "Maria", "Juan"]

// nombres.pop();

// console.log(nombres); // ["Alvaro", "Maria"]

// nombres.unshift("Ana"); // Agrega Ana al inicio del array
// console.log(nombres); // ["Ana", "Alvaro", "Maria"]

// nombres.shift(); // Elimina el primer elemento del array (Ana)
// console.log(nombres); // ["Alvaro", "Maria"]



// for

// const nombres = ["Alvaro", "Maria", "Juan"];

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }


// const numeros = [20, 15, 10, 5, 7, 77, 22, 3, 8, 9];
// console.log(numeros);

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > 15) {
//         console.log(numeros[i]);
//     }
// }

// const nombres = ["Alvaro", "Maria", "Juan"]

// function mostrarNombre (nombre) {
//     nombre = nombre + "!!!";
//     console.log(nombre);
// }

// nombres.forEach (mostrarNombre);


const numeros = [20, 15, 10, 5];

function mostrarNumeros (numero) {
    numero = numero + "!!";
    console.log(numero);
}

numeros.forEach(mostrarNumeros)