let variableRara: any;

variableRara =100;
variableRara ="string";
variableRara ={}
variableRara = []
variableRara = null;
variableRara = true;
//any como primitivo

//caso 1
let myDynamicVar:any;
myDynamicVar = "hola";
const oterString = (myDynamicVar as String).toLowerCase();
console.log(myDynamicVar);

//caso 2
myDynamicVar =234;
const number = myDynamicVar.toFixed();
console.log(number);
