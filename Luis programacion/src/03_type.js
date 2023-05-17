"use strict";
//Stings
//comillas simple
let comillas = 'ejemplo 1';
let comillas2 = 'ejemplo de "comillas doble" en comillas simples';
// esto no se debe hacer let comillas3 = 'ejemplo de 'comillas simple' dentro de comillas simple';
console.log(comillas, comillas2);
// comillas dobles
let comillas3 = "comillas dobles";
let comillas4 = "comillas'simple' dentro de comilla doble";
//esto no se debe hacer
//let comillas5 = "comillas dobles dentro de "domillas doble"";
console.log(comillas3, comillas4);
//usando backticks
let myName = `luis`;
let texto = `
[esto es un string dentro de un blackticks]{esto es el mismo estris dentro de backticks}`;
console.log(texto);
console.log(myName);
let titulo = "programacion visual";
let comentario = `este es el ${titulo}`;
let procutittle = 'mi producto';
//procutittle = null;
//procutittle = = 123;
// productittle = () =>;
//array
// definicion array en ts 
let myArray = [1, 2, 3, 4];
//Metodo PUSH (para  agregar un elemento al final de array)
myArray.push(1);
console.log(myArray);
// no se puede agregar un string en un array tipo number : myArray.push("10");
let meses;
// no se pude operar con datos tipo sting 
//meses.map(item => item *2);
myArray.map(item => item * 2);
//definir arrays de varios tipos de datos
let mezclado = ["hola mundo", 12, 3, 4, "hello word"];
console.log(mezclado);
(() => {
    let mezcla = [12, 1, 3, 444, "string", "ejemplo", `doctype`];
});
