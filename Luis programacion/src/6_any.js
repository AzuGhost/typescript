"use strict";
let variableRara;
variableRara = 100;
variableRara = "string";
variableRara = {};
variableRara = [];
variableRara = null;
variableRara = true;
//any como primitivo
//caso 1
let myDynamicVar;
myDynamicVar = "hola";
const oterString = myDynamicVar.toLowerCase();
console.log(myDynamicVar);
//caso 2
myDynamicVar = 234;
const number = myDynamicVar.toFixed();
console.log(number);
