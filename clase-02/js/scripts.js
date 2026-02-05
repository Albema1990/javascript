// // Condicionales

// // Valor booleano
// let Verdadero = true;
// let Falso = false;

// // Operadores de asignación

// let numero = 10;

// // Operadores de comparación

// console.log(5 == 5); // Igualdad simple
// console.log(5 === "5"); // Igualdad estricta
// console.log(5 > 3); // Mayor que
// console.log(5 < 7); // Menor que
// console.log(5 >= 5); // Mayor o igual que
// console.log(5 <= 4); // Menor o igual que
// console.log(5 != 3); // Diferente de
// console.log(5 !== "5"); // Diferente estricto

// console.log(8 > 5);
// console.log(4 < 2);

// let edad = 16;
// let mayorEdad = 18;
// console.log(edad > mayorEdad);

// let edad = 2;
// const mayorEdad = 18;

// // Condicional simple
// if (edad >= mayorEdad) {
//     // Código a ejecutar si la condición es verdadera
//     console.log("Eres mayor de edad");
// }

// let temperatura = 26;

// if (temperatura > 25) {
//     console.log("Hace calor");
// }

// Scope de bloque

// let temperatura = 3;

// if (temperatura <= 5) {
//     let mensaje = "Hace frío";
//     mensaje = mensaje + " Abrígate bien";
//     console.log(mensaje);
// }

// Condiciona compuesta

// let temperatura = 3;

// if (temperatura <= 10) {
//   console.log("Hace frío");
// } else {
//   console.log("Hace calor");
// }

// let nota = 10;

// if (nota >= 5) {
//     console.log("Aprobado");
// } else {
//     console.log("Suspenso");
// }

// else if

// let temperatura = 10;

// if (typeof temperatura == "number") {
//   if (temperatura <= 5) {
//     console.log("Hace frío");
//   } else if (temperatura > 5 && temperatura <= 25) {
//     console.log("Hace una temperatura agradable");
//   } else {
//     console.log("Hace calor");
//   }
// } else {
//   console.log("La temperatura no es un número");
// }


// let edad = 7;

// if (typeof edad == "number") {
//   if (edad < 13) {
//     console.log("Eres menor de edad");
//   } else if (edad >= 13 && edad < 18) {
//     console.log("Eres adolescente");
//   } else {
//     console.log("Eres mayor de edad");
//   }
// } else {
//   console.log("La edad no es un número");
// }

// Operadores lógicos
// Operador logico or (||)

// let temperatura = 30;
// let lluvia = true;

// if (temperatura > 20 || lluvia == true) {
//     console.log("Hace buen tiempo");
// }

// ---

// let llueve = true;

// if (llueve) {
//     console.log("Lleva paraguas");
// } else {
//     console.log("No hace falta paraguas");
// }  

// let parOimpar = 11;

// if (parOimpar % 2 == 0) {
//     console.log("El número es par");
// } else {
//     console.log("El número es impar");
// }

// switch

let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número de día no válido");
}
// } else if (dia == 2) {
//     console.log("Martes");
// } else if (dia == 3) {
//     console.log("Miércoles");
// } else if (dia == 4) {
//     console.log("Jueves");
// } else if (dia == 5) {
//     console.log("Viernes");
// } else if (dia == 6) {
//     console.log("Sábado");
// } else if (dia == 7) {
//     console.log("Domingo");
// } else {
//     console.log("Número de día no válido");
// }