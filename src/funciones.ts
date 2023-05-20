// Funciones en TS

type Sizes= 'S' | 'M' | 'L' | 'XL';

function createProductJson(
  tittle: string,
  crateAt : Date,
  stock : number,
  size: Sizes
){
  return {
    tittle,
    crateAt,
    stock,
    size
  }
}

const product1 = createProductJson("Mochila de cuero",
new Date('16/05/2023'),
30,
'XL'
);

const prodyct2 = createProductJson(
  "celular xiaomi",
  new Date(1/1/2023),
  10,
  'L'
);

console.log(product1);
console.log(prodyct2);

// retorno en funciones
// funciones sin retorno

function imprimirnombre(
  yourName : string
): void {
  console.log(`Hola ${yourName}, bienvenido a TS`);
}
imprimirnombre("Luis");

// funciones con retorno

function funcionConRetorno(
  a: number,
  b: number): number | string{
    if (a>b){
      return a;
    }
    else{
      if (b>a){
        return b
      }
      else{
        return `los numeros ${a} y ${b} son iguales`;
      }
    }
  }

  const ejemploretorno = funcionConRetorno(44,45);
  console.log(ejemploretorno)

  const ejemploretorno1 = funcionConRetorno(55,55);
  console.log(ejemploretorno1)

function imprimirDatos(
  data: { username: string, email: string}
): void{
  console.log(`tu nombre de usuario es ${data.username} y tu email es ${data.email}`);
}

imprimirDatos({
  username : "luis",
  email : "ldsu.david.xasdjQs@fdsj.com"
});

// objetos como tipo

type userData ={
  username: string,
  email: string
}

let userList: userData[] = [];

userList.push({
  username : "luis",
  email: "ldsu.david@asdas.com"
})