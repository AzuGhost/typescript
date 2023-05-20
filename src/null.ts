//especificacion de null para no ser reconocido como any
//se identifica como objeto
let null1 = null; 
//se identifica como undefined
let und1 = undefined; 

console.log(typeof(null1),typeof(und1));


let null2: null = null;
let und2: undefined = undefined;
console.log(typeof(null2),typeof(und2));

// inicializar variable con datos vacios

let MyNull: number|null;

MyNull = 100;
console.log(MyNull);

let MyUnd : string|undefined;

MyUnd = "ejemplo de datos remplazado";
console.log(MyUnd);
