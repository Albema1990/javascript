// imprimir del 1 al 100 de 1 en 1

// debugger;

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// ---

// let num = 0;

// num = 0 + 1;
// num = num + 1;
// num += 1; // num = num + 1
// num++; // num = num + 1

// let i = 10;

// while (i > 0) {
//     console.log(i);
//     i--;
// }

// --- prompt

// debugger;
// let texto = prompt("Ingrese un texto que comience con la letra A");

// console.log("La palabra ingresada es: " + texto, texto != "Adios");

// while (texto !="Adios") {
//     let texto = prompt("Ingrese un texto que comience con la letra A");
//     console.log("La palabra ingresada es: " + texto);
// }

// let i = 1;

// while (i <=5) {
//     console.log(i);
//     i++;
// }

// let palabra = prompt("Ingrese una palabra");

// while (palabra != "js") {
//     console.log("La palabra ingresada es: " + palabra);
//     palabra = prompt("Ingrese una palabra");
// }

// do while

// let text;

// do {
//     text = prompt("Ingrese una palabra");
//     console.log("La palabra ingresada es: " + text);
// } while (text != "js");

// let num;

// do {
//     num = prompt("Ingresa el numero 5");
//     console.log("El numero ingresado es: " + num);
// } while (num != "5");

// let i = 2;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 20);

// let i = 0;

// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 20);


// for

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }


// for (let i = 1; i<= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

for (let i = 1; i <= 10; i++) {
    if (i == 5 || i == 8 || i == 9 || i == 10) {
        continue;
    }
    console.log(i);
}