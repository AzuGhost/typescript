//
let MyArray = [1,2,3,4,5,6,7,8,9];


//metodo push *elemento al final del array

myArray.push(10);
console.log(myArray);

//no se puede agregar un string en un array tipo number: myArray.push("10");

let Meses : ["enero","ferbrero","marzo","abril","mayo","junio","julio"]
//no se puede operar con datos tipo string: meses.map item => item * 2;
myArray.map(item => item * 2);

//definir arrays de varios tipos de datos:
let Mezclado: (number|string)[] =["hola mundo", 12,3,4, "hello world"];
console.log(Mezclado);

(() => {

let mezcla: (number |string|boolean|object|null)[] = [12,1,3,444,"string","ejemplos",true,false,false]
mezcla.push({});
mezcla.push(null);
mezcla.push([]);
console.log(mezcla);




})();
